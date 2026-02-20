import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const hostname = "https://www.structurology.com";

// Helper for ISO dates
const today = new Date().toISOString().split("T")[0];

const routes = [
  {
    url: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    url: "/services/solar",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: "2026-01-20",
  },
  {
    url: "/services/buildings",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: "2026-01-20",
  },
  {
    url: "/services/telecom",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: "2026-01-20",
  },
  {
    url: "/about",
    priority: 0.7,
    changefreq: "yearly",
    lastmod: "2025-12-10",
  },
  {
    url: "/projects",
    priority: 0.7,
    changefreq: "monthly",
    lastmod: "2026-01-15",
  },
  {
    url: "/blogs",
    priority: 0.8,
    changefreq: "weekly",
    lastmod: "2026-01-15",
  },
  {
    url: "/contact",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: "2026-01-05",
  },
];

(async () => {
  const sitemap = new SitemapStream({ hostname });

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated successfully with lastmod dates");
})();
