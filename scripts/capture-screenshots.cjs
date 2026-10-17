const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureSite(browser, url, filename) {
  console.log(`Starting capture for ${url} -> ${filename}...`);
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    console.log(`Initial navigation timeout for ${url}, continuing...`);
  }

  // Close any modal popup if exists (e.g. GRN modal)
  try {
    const closeBtn = await page.$('button[aria-label*="close" i], button:has-text("Cancel"), button:has-text("Close"), [aria-label*="Close" i]');
    if (closeBtn) {
      await closeBtn.click();
      console.log('Closed modal popup');
      await page.waitForTimeout(500);
    }
  } catch (e) {
    // Ignore modal close failure
  }

  // Smoothly scroll down the page to trigger all IntersectionObservers and lazy loads
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });

  // Wait 2 seconds at bottom for assets
  await page.waitForTimeout(2000);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  const outputPath = path.join(__dirname, '..', 'public', 'images', 'projects', filename);
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log(`Captured ${filename} successfully! Size: ${fs.statSync(outputPath).size}`);

  await context.close();
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  try {
    await captureSite(browser, 'https://vizhastories.in', 'vizha-full.png');
    await captureSite(browser, 'https://valparaiwanderertours.com', 'valparai-full.png');
    await captureSite(browser, 'https://vihahandicrafts.com', 'viha-full.png');
    await captureSite(browser, 'https://grnconstruction.in', 'grn-full.png');
  } finally {
    await browser.close();
  }
}

run().catch(console.error);
