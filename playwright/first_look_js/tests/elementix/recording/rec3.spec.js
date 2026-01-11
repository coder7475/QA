import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev.elementix.us/");
  await page.getByRole("link", { name: "Go to homepage" }).click();
  await expect(
    page.getByRole("heading", { name: "Transforming Ideas into" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Go to homepage" })
  ).toBeVisible();
  await page.getByText("Ideas", { exact: true }).click();
  await page.getByText("Solutions", { exact: true }).click();
  await expect(page.locator("#home")).toContainText(
    "Empowering startups and enterprises with intelligent software, modern cloud infrastructure, and expert consulting with 5+ years of expertise that drives results."
  );
  await page
    .locator("div")
    .filter({ hasText: "Transforming Ideas into" })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Scroll to about section" }).click();
  await page.getByText("Solutions", { exact: true }).click();
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.getByRole("img", { name: "Our Team Working" }).click();
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page
    .locator("div")
    .filter({ hasText: "Web & App DevelopmentBuilding" })
    .nth(2)
    .click();
  await page
    .locator("div")
    .filter({ hasText: "Application & System" })
    .nth(2)
    .click();
  await page
    .locator("div")
    .filter({ hasText: "Cloud Architecture &" })
    .nth(2)
    .click();
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page
    .locator("div")
    .filter({ hasText: "IT ConsultingGuiding you with" })
    .nth(2)
    .click();
  await page.locator("#services").click();
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowRight");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await page.locator("body").press("ArrowUp");
  await expect(page.locator("#home")).toMatchAriaSnapshot(`
    - heading "Transforming Ideas into Scalable Solutions" [level=1]
    - paragraph: Empowering startups and enterprises with intelligent software, modern cloud infrastructure, and expert consulting with 5+ years of expertise that drives results.
    `);
  await expect(
    page.locator("div").filter({ hasText: "Transforming Ideas into" }).nth(1)
  ).toBeVisible();
});
