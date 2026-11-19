import { test, expect } from "@playwright/test";
test.describe("PIM-ADD - Tambah Karyawan", () => {
  test("TC-PIM-ADD Tambah Karyawan dengan First Name dan Last Name saja", async ({
    page,
  }) => {
    const employeeID = `E${Date.now().toString().slice(-6)}`;

    await page.goto("/web/index.php/auth/login");
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page
      .getByRole("textbox", { name: "Password", exact: true })
      .fill("admin123");
    await page.getByRole("button", { name: "Login", exact: true }).click();
    await expect(page).toHaveURL(/dashboard\/index/);
    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("link", { name: "Add Employee" }).click();
    await page.getByRole("textbox", { name: "First Name" }).fill("Bima");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Sakti");
    await page.getByRole("textbox").nth(4).fill(employeeID);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page).toHaveURL(/viewPersonalDetails\/empNumber/);
    await expect(
      page.getByRole("heading", { name: "Bima Sakti" }),
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: "First Name" })).toHaveValue(
      "Bima",
    );
    await expect(page.getByRole("textbox", { name: "Last Name" })).toHaveValue(
      "Sakti",
    );
  });
});
