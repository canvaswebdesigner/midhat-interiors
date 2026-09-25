import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Midhat Interiors site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Midhat Interiors \| Warm Minimalist Interior Design in Karachi<\/title>/i);
  assert.match(html, /Space, made/);
  assert.match(html, /Book a free consultation/);
  assert.match(html, /Residential interiors/);
  assert.match(html, /Commercial spaces/);
  assert.match(html, /https:\/\/wa\.me\/923009046269/);
  assert.match(html, /https:\/\/www\.instagram\.com\/midhat_interior\//);
  assert.match(html, /property="og:image" content="https:\/\/midhat-interiors-karachi\.efepro2003\.chatgpt\.site\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps the final site responsive and accessible", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /aria-label="Primary navigation"/);
  assert.match(page, /rel="noreferrer"/);
  assert.match(layout, /Midhat Interiors/);
  assert.match(layout, /images:\s*\["\/og\.png"\]/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /overflow-x:\s*hidden/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
