// Runs axe-core against every page of the built site, in light and dark colour schemes,
// with the WCAG 2.0, 2.1 and 2.2 A/AA rules. Expects public/ served at BASE_URL.
// Fails on any violation or any "incomplete" (needs-review) result.
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import puppeteer from "puppeteer";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const base = process.env.BASE_URL ?? "http://localhost:8080";
const paths = ["/", "/shipped/", "/shipped/dot-studio/", "/contributions/", "/kill-log/", "/how-we-work/", "/contact/", "/404.html"];
const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"];

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH ?? "/usr/bin/google-chrome",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
let failures = 0;
try {
  for (const scheme of ["light", "dark"]) {
    for (const path of paths) {
      const page = await browser.newPage();
      await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: scheme }]);
      await page.goto(base + path, { waitUntil: "load" });
      await page.addScriptTag({ content: axeSource });
      const result = await page.evaluate((runTags) => window.axe.run(document, { runOnly: { type: "tag", values: runTags } }), tags);
      const problems = [...result.violations, ...result.incomplete];
      console.log(`${scheme.padEnd(5)} ${path}: ${result.violations.length} violations, ${result.incomplete.length} incomplete`);
      for (const p of problems) console.log(`  ${p.id}: ${p.help} (${p.nodes.length} nodes)`);
      failures += problems.length;
      await page.close();
    }
  }
} finally {
  await browser.close();
}
if (failures > 0) {
  console.error(`axe found ${failures} problem(s).`);
  process.exit(1);
}
