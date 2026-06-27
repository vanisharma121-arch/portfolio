const puppeteer = require('puppeteer');
const path = require('path');

const wait = ms => new Promise(r => setTimeout(r, ms));

async function scrollToReveal(page) {
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = 600;
  for (let y = 0; y < totalHeight; y += step) {
    await page.evaluate(pos => window.scrollTo(0, pos), y);
    await wait(120);
  }
  // Scroll back to top for full-page shot
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(400);
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await wait(1200); // fonts settle

  // Scroll so IntersectionObserver fires for every section
  await scrollToReveal(page);

  // Hero
  await page.screenshot({ path: 'screenshot_hero.png', fullPage: false });
  console.log('✓ screenshot_hero.png');

  // Full page
  await page.screenshot({ path: 'screenshot_full.png', fullPage: true });
  console.log('✓ screenshot_full.png');

  // Per-section shots — scroll to element first
  for (const [id, file] of [
    ['#about',      'screenshot_about.png'],
    ['#skills',     'screenshot_skills.png'],
    ['#experience', 'screenshot_experience.png'],
    ['#projects',   'screenshot_projects.png'],
    ['#contact',    'screenshot_contact.png'],
  ]) {
    const el = await page.$(id);
    if (!el) continue;
    await el.scrollIntoView();
    await wait(500);
    await el.screenshot({ path: file });
    console.log(`✓ ${file}`);
  }

  await browser.close();
  console.log('\nAll screenshots saved.');
})();
