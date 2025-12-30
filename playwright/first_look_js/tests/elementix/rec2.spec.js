import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Go to homepage" }).click();
  await page.getByRole("heading", { name: "Transforming Ideas into" }).click();
  await page.getByText("Empowering startups and").click();
  await page.getByRole("link", { name: "Scroll to about section" }).click();
  await page
    .getByRole("heading", { name: "Smart Solutions, Reliable" })
    .click();
  await page.getByText("With over 5 years of").click();
  await page.getByText("\"We don't just deliver").click();
  await page.getByText("\"We don't just deliver").click();
  await page.getByRole("img", { name: "Our Team Working" }).click();
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page
    .getByRole("heading", { name: "We Provide Exclusive Services" })
    .click();
  await page
    .locator("div")
    .filter({ hasText: "Web & App DevelopmentBuilding" })
    .nth(2)
    .click();
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
    .filter({ hasText: "Application & System" })
    .nth(2)
    .click();
  await page
    .locator("div")
    .filter({ hasText: "Business Growth &" })
    .nth(2)
    .click();
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.locator("body").press("ArrowDown");
  await page.getByRole("heading", { name: "Innovative, Optimized," }).click();
  await page.getByRole("heading", { name: "Our Processes" }).click();
  await page
    .locator("#process")
    .getByRole("button", { name: "Schedule a Meeting" })
    .click();
  await page
    .getByRole("heading", { name: "Your Gateway To Trusted IT" })
    .click();
  await page
    .getByRole("heading", { name: "Your Gateway To Trusted IT" })
    .click();
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
  await page.getByText("A trusted IT consulting").click();
  await page.getByRole("link", { name: "Elementix Logo" }).click();
  await page.getByRole("link", { name: "Our Process" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Home", exact: true })
    .click();
});
