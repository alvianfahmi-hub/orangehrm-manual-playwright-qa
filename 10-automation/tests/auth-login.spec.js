import { test, expect } from "@playwright/test";

export const LOGIN_URL = "/web/index.php/auth/login";

test.describe("AUTH-Login", () => {
  test("TC-AUTH-001 Login dengan kredential Admin valid", async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard\/index/);
    await expect(
      page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
  });

  test("TC-AUTH-002 Login dengan Username dan Password kosong", async ({
    page,
  }) => {
    await page.goto(LOGIN_URL);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Required")).toHaveCount(2); // perlu cek ulang
    await expect(page).toHaveURL(/auth\/login/);
  });

  test("TC-AUTH-003 Login dengan Username benar dan Password salah", async ({
    page,
  }) => {
    await page.goto(LOGIN_URL);
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("salah123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("alert")).toContainText("Invalid credentials");
    await expect(page).toHaveURL(/auth\/login/);
  });

  test("TC-AUTH-004 Login dengan Username dan Password salah", async ({
    page,
  }) => {
    await page.goto(LOGIN_URL);
    await page.getByRole("textbox", { name: "Username" }).fill("userSalah");
    await page.getByRole("textbox", { name: "Password" }).fill("salah123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("alert")).toContainText("Invalid credentials");
    await expect(page).toHaveURL(/auth\/login/);
  });
});
