# QA Automation Examples

This repository contains a collection of QA automation examples using different frameworks like Playwright and Selenium.

## Directory Structure

The repository is organized as follows:

```
/
├── playwright/
│   └── first_look_js/       # Playwright examples with JavaScript/TypeScript
└── selenium/
    ├── download_devops_pdfs/ # Selenium script to download PDFs
    └── dynamic_pdf_scraping/ # Selenium script for dynamic PDF scraping
```

## Playwright

The `playwright/first_look_js` directory contains a sample Playwright project.

### Getting Started

To run the Playwright tests, you need to have Node.js and npm installed.

1.  Navigate to the `playwright/first_look_js` directory:
    ```bash
    cd playwright/first_look_js
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Run the tests:
    ```bash
    npx playwright test
    ```

## Selenium

The `selenium` directory contains Python scripts that use the Selenium library for web scraping and automation.

### `download_devops_pdfs`

This script demonstrates how to download PDF files from a website.

#### Getting Started

1.  Navigate to the `download_devops_pdfs` directory:
    ```bash
    cd selenium/download_devops_pdfs
    ```

2.  Install the dependencies from `requirements.txt`:
    ```bash
    pip install -r requirements.txt
    ```

3.  Run the script:
    ```bash
    python main.py
    ```

### `dynamic_pdf_scraping`

This script shows how to handle dynamic content and scrape PDF files.

#### Getting Started

1.  Navigate to the `dynamic_pdf_scraping` directory:
    ```bash
    cd selenium/dynamic_pdf_scraping
    ```

2.  Install the dependencies from `requirements.txt`:
    ```bash
    pip install -r requirements.txt
    ```

3.  Run the script:
    ```bash
    python main.py
    ```