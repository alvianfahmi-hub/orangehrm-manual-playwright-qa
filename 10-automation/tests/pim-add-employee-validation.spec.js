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

async function openAddEmployee(page) {
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
}

test.describe("PIM-ADD - Validasi form", () => {
  test("TC-PIM-ADD-003 Save dengan semua field kosong (Create Login Details aktif)", async ({
    page,
  }) => {
    await loginAdmin(page);
    await openAddEmployee(page);

    await page.locator(".oxd-switch-input").check();
    // await expect(
    //   page.getByRole("heading", { name: "Create Login Details" }),
    // ).toBeVisible(); gaada locatornya

    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.getByText("Required").first()).toBeVisible();
    await expect(page.getByText("Required").nth(1)).toBeVisible();
    await expect(page.getByText("Required").nth(2)).toBeVisible();
    await expect(page.getByText("Required").nth(3)).toBeVisible();
    await expect(page.getByText("Passwords do not match")).toBeVisible();
    await expect(page).toHaveURL(/addEmployee/);
  });

  test("TC-PIM-ADD-004 Batas karakter First Name, Middle Name, dan Last Name", async ({
    page,
  }) => {
    await loginAdmin(page);
    await openAddEmployee(page);

    await page
      .getByRole("textbox", { name: "First Name" })
      .fill("a".repeat(31));
    await page
      .getByRole("textbox", { name: "Middle Name" })
      .fill("a".repeat(31));
    await page.getByRole("textbox", { name: "Last Name" }).fill("a".repeat(31));
    await expect(page.getByText("Should not exceed 30")).toHaveCount(3);

    await page
      .getByRole("textbox", { name: "First Name" })
      .fill("a".repeat(30));
    await page
      .getByRole("textbox", { name: "Middle Name" })
      .fill("a".repeat(30));
    await page.getByRole("textbox", { name: "Last Name" }).fill("a".repeat(30));
    await expect(page.getByText("Should not exceed 30")).toHaveCount(0);
  });

  test("TC-PIM-ADD-005 Batas karakter Employee Id", async ({ page }) => {
    await loginAdmin(page);
    await openAddEmployee(page);

    const employeeIdField = page.getByRole("textbox").nth(4);

    await employeeIdField.fill("a".repeat(11));
    await expect(page.getByText("Should not exceed 10")).toBeVisible();

    await employeeIdField.fill("a".repeat(10));
    await expect(page.getByText("Should not exceed 10")).toHaveCount(0);
  });

  test("TC-PIM-ADD-006 Batas karakter Username (Create Login Details aktif", async ({
    page,
  }) => {
    await loginAdmin(page);
    await openAddEmployee(page);

    await page.locator(".oxd-switch-input").check();
    const usenameField = page.getByRole("textbox").nth(5);

    await usenameField.fill("a".repeat(41));
    await expect(page.getByText("Should not exceed 40")).toBeVisible();

    await usenameField.fill("a".repeat(40));
    await expect(page.getByText("Should not exceed 40")).toHaveCount(0);
  });

  test("TC-PIM-ADD-007 Batas karakter Password (Create Login Details aktif)", async ({
    page,
  }) => {
    await loginAdmin(page);
    await openAddEmployee(page);

    await page.locator(".oxd-switch-input").check();
    const passwordField = page.locator('input[type="password"]').first();
    const confirmField = page.locator('input[type="password"]').nth(1);

    await passwordField.fill("a".repeat(65));
    await confirmField.fill("a".repeat(65));
    await expect(page.getByText("Should not exceed 64")).toBeVisible();

    await passwordField.fill("a".repeat(64));
    await confirmField.fill("a".repeat(64));
    await expect(page.getByText("Should not exceed 64")).toHaveCount(0);
    await expect(page.getByText("Your password must contain")).toBeVisible();
  });
});
