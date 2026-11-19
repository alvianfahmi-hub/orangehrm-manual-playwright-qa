import { test, expect } from "@playwright/test";

const LOGIN_URL = "/web/index.php/auth/login";

test.describe("PIM-SRC - Cari Karyawan", () => {
  let testData;

  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page
      .getByRole("textbox", { name: "Password", exact: true })
      .fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard\/index/);

    const suffix = Date.now().toString().slice(-6);
    testData = {
      firstName: `Bima${suffix}`,
      lastName: "Sakti",
      employeeId: `E${suffix}`,
      fullName: `Bima${suffix} Sakti`,
    };

    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("link", { name: "Add Employee" }).click();
    await page
      .getByRole("textbox", { name: "First Name" })
      .fill(testData.firstName);
    await page
      .getByRole("textbox", { name: "Last Name" })
      .fill(testData.lastName);
    await page.getByRole("textbox").nth(4).fill(testData.employeeId);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page).toHaveURL(/viewPersonalDetails/);

    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("link", { name: "Employee List" }).click();
  });

  test("TC-PIM-SRC-001 Cari karyawan berdasarkan Employee Name", async ({
    page,
  }) => {
    await page
      .getByRole("textbox", { name: "Type for hints.." })
      .first()
      .fill(testData.fullName);
    await page.getByRole("button", { name: "Search" }).click();

    await expect(
      page.getByRole("row").filter({ hasText: testData.fullName }),
    ).toBeVisible();
  });

  test("TC-PIM-SRC-002 Cari karyawan berdasarkan Employee Id", async ({
    page,
  }) => {
    await page.getByRole("textbox").nth(2).fill(testData.employeeId);
    await page.getByRole("button", { name: "Search" }).click();

    await expect(
      page
        .getByRole("row")
        .filter({ hasText: testData.employeeId })
        .filter({ hasText: testData.fullName }),
    ).toBeVisible();
  });

  test("TC-PIM-SRC-003 Cari Employee Name yang tidak ada", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "type for hints..." })
      .first()
      .fill("Zidan Bisma");
    await page.getByRole("button", { name: "Search" }).click();
    await expect(
      page.locator("span").filter({ hasText: "No Records Found" }),
    ).toBeVisible();
  });

  test("TC-PIM-SRC-004 Cari Employee Id yang tidak ada", async ({ page }) => {
    await page.getByRole("textbox").nth(2).fill("8888");
    await page.getByRole("button", { name: "Search" }).click();
    await expect(
      page.locator("span").filter({ hasText: "No Records Found" }),
    ).toBeVisible();
  });
});
