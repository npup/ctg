import { defineConfig } from "astro/config";
import { config as npmConf } from "./package.json";

const env = "local" === process.env.NODE_ENV ? "local" : "prod";

const conf = {
    local: {
        outDir: npmConf.outDirLocal,
        site: "http://localhost",
        base: "/",
    },
    prod: {
        outDir: npmConf.outDirProd,
    },
};

const astroConf = defineConfig({
    server: {
        port: 3000,
    },
    ...conf[env],
});

console.log("Conf:", { env, npmConf, astroConf });

export default astroConf;
