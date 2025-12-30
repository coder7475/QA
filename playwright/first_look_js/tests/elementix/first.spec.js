import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000", {
    waitUntil: "domcontentloaded",
    timeout: 50_000,
  });

  await expect(page).toHaveTitle(/Elementix Software Ventures LLC/);
});

test("has the elementix logo on navbar", async ({ page }) => {
  await page.goto("http://localhost:3000", {
    waitUntil: "domcontentloaded",
    timeout: 50_000,
  });

  await page.getByRole("link", { name: "Go to homepage" }).click();

  await expect(
    page
      .getByRole("navigation")
      .getByRole("link", { name: "Home", exact: true })
  ).toBeInViewport();
});
