import { defineConfig } from "astro/config";

const isLocal = "local" === process.env.NODE_ENV;

const outDir = isLocal ? "docs-local" : "docs";

export default defineConfig({
    outDir,
    server: {
        port: 3000,
    },
    site: "https://npup .github.io",
    base: "/ctg",
    // your configuration options here...
    // https://docs.astro.build/en/reference/configuration-reference/
});
