import { test, expect } from "@playwright/test";

const LOGIN_URL = "/web/index.php/auth/login";

async function loginAdmin(page) {
  await page.goto(LOGIN_URL);
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/dashboard\/index/);
}

async function logout(page) {
  await page.locator(".oxd-userdropdown-tab").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
  await expect(page).toHaveURL(/auth\/login/);
}

test.describe("E2E — Tambah lalu cari dan Login", () => {
  test("TC-E2E-001 Login Admin, tambah karyawan, cari berdasarkan Employee Id, verifikasi nama dan Id", async ({
    page,
  }) => {
    const suffix = Date.now().toString().slice(-6);
    const employeeId = `E${suffix}`;
    const username = `tika${suffix}`;
    const password = "Tika123!";

    await loginAdmin(page);
    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("link", { name: "Add Employee" }).click();

    await page.getByRole("textbox", { name: "First Name" }).fill("Tika");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Putri");
    await page.getByRole("textbox").nth(4).fill(employeeId);

    await page.locator(".oxd-switch-input").check();
    await page.getByRole("textbox").nth(5).fill(username);
    await page.locator('input[type="password"]').first().fill(password);
    await page.locator('input[type="password"]').nth(1).fill(password);

    await page.getByRole("button", { name: "Save" }).click();
    await expect(
      page.getByRole("heading", { name: "Tika Putri" }),
    ).toBeVisible();

    // Kembali ke Employee List dan search
    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("link", { name: "Employee List" }).click();

    await page.getByRole("textbox").nth(2).fill(employeeId);
    await page.getByRole("button", { name: "Search" }).click();

    await expect(
      page
        .getByRole("row")
        .filter({ hasText: employeeId })
        .filter({ hasText: "Tika Putri" }),
    ).toBeVisible();
  });

  test("TC-E2E-002 Login sebagai karyawan yang baru dibuat", async ({
    page,
  }) => {
    // ===== Setup mandiri: tidak bergantung TC-E2E-001 =====
    const suffix = Date.now().toString().slice(-6);
    const username = `tika${suffix}`;
    const password = "Tika123!";
    const employeeId = `E${suffix}`;

    await loginAdmin(page);
    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("link", { name: "Add Employee" }).click();
    await page.getByRole("textbox", { name: "First Name" }).fill("Tika");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Putri");
    await page.getByRole("textbox").nth(4).fill(employeeId);
    await page.locator(".oxd-switch-input").check();
    await page.getByRole("textbox").nth(5).fill(username);
    await page.locator('input[type="password"]').first().fill(password);
    await page.locator('input[type="password"]').nth(1).fill(password);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(
      page.getByRole("heading", { name: "Tika Putri" }),
    ).toBeVisible();

    await logout(page);

    // ===== Test utama: login sebagai user baru =====
    await page.getByRole("textbox", { name: "Username" }).fill(username);
    await page
      .getByRole("textbox", { name: "Password", exact: true })
      .fill(password);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/dashboard\/index/);
    await expect(page.getByText("Tika Putri").first()).toBeVisible();
  });
});
