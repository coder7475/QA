import { test, expect } from "@playwright/test";

test("test", async ({ page, context }) => {
  // Home
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveURL("http://localhost:3000/"); // URL assertion

  // About
  await page.getByRole("link", { name: "About", exact: true }).click();

  // Services (nav link exists + is usable)
  const servicesLink = page
    .getByRole("navigation")
    .getByRole("link", { name: "Services" });
  await expect(servicesLink).toBeVisible(); // element visible before interactions
  await servicesLink.click();

  // Your repeated ArrowDown presses are likely unnecessary; keep just a couple if needed.
  await servicesLink.press("ArrowDown");
  await servicesLink.press("ArrowDown");

  // Slider controls
  const nextSlide = page.getByRole("button", { name: "Next slide" });
  await expect(nextSlide).toBeVisible(); // slider control exists

  // Contact form assertions (visibility + value checks)
  const nameInput = page.getByRole("textbox", { name: "Name" });
  const emailInput = page.getByRole("textbox", { name: "Email" });
  const subjectSelect = page.getByLabel("Contact Subject");
  const messageBox = page.getByRole("textbox", { name: "Write a Message" });
  const submitBtn = page.getByRole("button", { name: "Submit Request" });

  await expect(nameInput).toBeVisible();
  await nameInput.fill("Robiul");
  await expect(nameInput).toHaveValue("Robiul"); // input value assertion

  await emailInput.fill("robiul@gmail.com");
  await expect(emailInput).toHaveValue("robiul@gmail.com"); // input value assertion

  // Select option (assert it changed)
  await subjectSelect.selectOption("support");
  await expect(subjectSelect).toHaveValue("support"); // select value assertion

  await messageBox.fill("Need Support");
  await expect(messageBox).toHaveValue("Need Support"); // textarea value assertion

  await expect(submitBtn).toBeEnabled(); // button actionable
});
