const path = require('path');
const puppeteer = require('puppeteer');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
    color: #222;
    background: #ffffff;
    font-size: 11px;
    line-height: 1.45;
  }
  .page { padding: 40px 44px; }
  header { margin-bottom: 14px; }
  h1 {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #00ACC1;
    line-height: 1.1;
  }
  .tagline {
    font-size: 13px;
    font-weight: 500;
    color: #444;
    margin-top: 3px;
  }
  .contact {
    font-size: 10.5px;
    color: #555;
    margin-top: 7px;
  }
  section { margin-top: 16px; }
  h2 {
    font-size: 12.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #00ACC1;
    border-bottom: 1px solid #cfd8dc;
    padding-bottom: 4px;
    margin-bottom: 8px;
  }
  .summary { font-size: 11px; color: #333; }
  .entry { margin-bottom: 9px; }
  .entry:last-child { margin-bottom: 0; }
  .entry-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .entry-title { font-weight: 700; font-size: 11.5px; color: #1a1a1a; }
  .entry-org { font-weight: 500; color: #00ACC1; }
  .entry-meta { font-size: 10px; color: #777; white-space: nowrap; padding-left: 12px; }
  ul.bullets { list-style: none; margin-top: 3px; }
  ul.bullets li {
    position: relative;
    padding-left: 13px;
    font-size: 10.5px;
    color: #333;
    margin-bottom: 1.5px;
  }
  ul.bullets li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00ACC1;
  }
  .edu-line { margin-bottom: 5px; }
  .edu-line:last-child { margin-bottom: 0; }
  .skill-row { margin-bottom: 4px; font-size: 10.5px; }
  .skill-label { font-weight: 700; color: #1a1a1a; }
</style>
</head>
<body>
<div class="page">
  <header>
    <h1>Vani Sharma</h1>
    <div class="tagline">Biotechnology Researcher &amp; Brand Strategist</div>
    <div class="contact">sharma.vani1@northeastern.edu &middot; +1 (857) 396-8591 &middot; Boston, MA &middot; linkedin.com/in/vanisharma</div>
  </header>

  <section>
    <h2>Summary</h2>
    <p class="summary">MS Biotechnology candidate at Northeastern University who bridges lab science and brand strategy &mdash; from clinical R&amp;D at Nivea to social campaigns that grew engagement 45%.</p>
  </section>

  <section>
    <h2>Education</h2>
    <div class="edu-line">
      <div class="entry-head">
        <div><span class="entry-title">MS Biotechnology</span> &mdash; <span class="entry-org">Northeastern University</span>, Boston, MA</div>
        <div class="entry-meta">Current</div>
      </div>
    </div>
    <div class="edu-line">
      <div class="entry-head">
        <div><span class="entry-title">B.Tech Biotechnology</span> &mdash; <span class="entry-org">Manipal Institute of Technology</span>, Karnataka, India</div>
        <div class="entry-meta">GPA 3.8</div>
      </div>
    </div>
  </section>

  <section>
    <h2>Experience</h2>

    <div class="entry">
      <div class="entry-head">
        <div><span class="entry-title">R&amp;D Intern</span> &mdash; <span class="entry-org">Nivea Pvt Ltd</span>, Mumbai, India</div>
        <div class="entry-meta">Jan &ndash; Jun 2024</div>
      </div>
      <ul class="bullets">
        <li>Developed formulations targeting hyperpigmentation for skin of color</li>
        <li>Ran clinical &amp; consumer trials across diverse skin types</li>
        <li>Ensured global regulatory compliance with dermatologist teams</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-head">
        <div><span class="entry-title">Research Intern</span> &mdash; <span class="entry-org">Manipal Institute of Technology</span>, Karnataka, India</div>
        <div class="entry-meta">Jun 2023 &ndash; Jun 2024</div>
      </div>
      <ul class="bullets">
        <li>Biosynthesis of Ag &amp; Zn nanoparticles using eco-friendly plant extracts</li>
        <li>Characterised via SEM, XRD, UV-Vis &amp; optimised extraction efficiency</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-head">
        <div><span class="entry-title">Social Media &amp; Content Head</span> &mdash; <span class="entry-org">E-Cell, MIT Manipal</span>, India</div>
        <div class="entry-meta">Oct 2022 &ndash; Oct 2023</div>
      </div>
      <ul class="bullets">
        <li>Grew organic followership 100&ndash;200/month across all platforms</li>
        <li>Boosted engagement by 45% and content impressions by 75%</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-head">
        <div><span class="entry-title">Clinical Research Intern</span> &mdash; <span class="entry-org">Glenmark Pharmaceutical</span>, Mumbai, India</div>
        <div class="entry-meta">Dec 2022 &ndash; Jan 2023</div>
      </div>
      <ul class="bullets">
        <li>Supported clinical trial stages, data collection &amp; documentation</li>
        <li>Ensured protocol adherence and regulatory &amp; ethical compliance</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-head">
        <div><span class="entry-title">Public Relations Manager</span> &mdash; <span class="entry-org">225.in</span>, Karnataka, India</div>
        <div class="entry-meta">Aug 2022 &ndash; May 2023</div>
      </div>
      <ul class="bullets">
        <li>Managed PR campaigns that boosted website traffic by 57%</li>
        <li>Tracked KPIs and adjusted strategy with analytics-driven insights</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-head">
        <div><span class="entry-title">Communications &amp; Audio Lead</span> &mdash; <span class="entry-org">SarkariSchool.in</span>, Remote</div>
        <div class="entry-meta">Apr &ndash; Sep 2021</div>
      </div>
      <ul class="bullets">
        <li>Raised website traffic 15% and revenue 17% via marketing</li>
        <li>Led audio production achieving 30% faster delivery cycle</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Skills</h2>
    <div class="skill-row"><span class="skill-label">Laboratory:</span> Gene Therapy, Cell Culture, PCR / qPCR, Western Blotting, Gel Electrophoresis, HPLC, Clinical Research</div>
    <div class="skill-row"><span class="skill-label">Marketing:</span> Social Media Strategy, Content Creation, Branding &amp; PR, Marketing Collateral, Community Insights</div>
    <div class="skill-row"><span class="skill-label">Software:</span> BioPython, R / Statistics, Canva</div>
    <div class="skill-row"><span class="skill-label">Professional:</span> PMO Support, Cross-Functional Collaboration, Data-Driven Decisions, Timeline Management</div>
  </section>
</div>
</body>
</html>`;

(async () => {
  const outPath = path.join(__dirname, 'brand_asset', 'Vani_Sharma_CV.pdf');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await browser.close();
  console.log('PDF written to: ' + outPath);
})().catch((err) => {
  console.error('ERROR generating PDF:');
  console.error(err);
  process.exit(1);
});
