import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const canonicalUrl = "https://www.davidzkchen.win/";
const html = readFileSync("index.html", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");
const jsonLdMatch = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);

assert.match(html, /<title>David Chen \| Software Developer at UWaterloo<\/title>/);
assert.match(html, /<meta\s+name="description"[\s\S]*?content="[^"]+"/);
assert.match(html, /<meta name="robots" content="index, follow" \/>/);
assert.match(html, new RegExp(`<link rel="canonical" href="${canonicalUrl}" \\/>`));
assert.match(html, /<meta property="og:title"/);
assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
assert.match(html, new RegExp(`<meta property="og:image" content="${canonicalUrl}og-image\\.png" \\/>`));
assert.ok(existsSync("public/og-image.png"), "Open Graph image is missing");
assert.ok(jsonLdMatch, "Structured data is missing");

const structuredData = JSON.parse(jsonLdMatch[1]);
const graphTypes = structuredData["@graph"].map((entry: { "@type": string }) => entry["@type"]);
assert.deepEqual(graphTypes, ["WebSite", "ProfilePage"]);
assert.equal(structuredData["@graph"][1].mainEntity["@type"], "Person");
assert.match(robots, /^User-agent: \*$/m);
assert.match(robots, new RegExp(`^Sitemap: ${canonicalUrl}sitemap\\.xml$`, "m"));
assert.match(sitemap, new RegExp(`<loc>${canonicalUrl}<\\/loc>`));
assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
assert.match(llms, /^# David Chen$/m);

console.log("SEO metadata, structured data, robots.txt, sitemap.xml, and llms.txt are valid.");
