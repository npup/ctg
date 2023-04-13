import { defineConfig } from "astro/config";

import x from "./package.json";
console.log("xxx", x);

const env = "local" === process.env.NODE_ENV ? "local" : "prod";

const conf = {
    local: {
        outDir: "docs-local",
        site: "http://localhost",
        base: "/",
    },
    prod: {
        outDir: "docs",
        site: "https://npup.github.io",
        base: "/ctg",
    },
};

console.log("using conf", { ...conf[env] });

export default defineConfig({
    server: {
        port: 3000,
    },
    ...conf[env],
});
