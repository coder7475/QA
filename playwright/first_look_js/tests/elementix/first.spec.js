import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  test.setTimeout(60_000);

  await page.goto("https://dev.elementix.us/", {
    waitUntil: "domcontentloaded",
    timeout: 50_000,
  });

  await expect(page).toHaveTitle(/Elementix Software Ventures LLC/);
});

test("has the elementix logo on navbar", async ({ page }) => {
  test.setTimeout(60_000);

  await page.goto("https://dev.elementix.us/", {
    waitUntil: "domcontentloaded",
    timeout: 50_000,
  });

  await page.getByRole("link", { name: "Go to homepage" }).click();

  const homeNavLink = page.locator("header").getByRole("link", {
    name: "Home",
    exact: true,
  });
  await expect(homeNavLink).toBeVisible();
});
