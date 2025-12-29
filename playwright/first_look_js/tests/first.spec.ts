// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

// const { hello, helloWord } = require("./demo/hello");

test("My first test", async ({ page }) => {
  await page.goto("https://google.com/");
  await expect(page).toHaveTitle(/Google/);
});
