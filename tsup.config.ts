import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
    splitting: false,
    entry: ["./src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: false,
    external: ["react", "react-dom"],
    noExternal: ["@tanstack/react-table", "@tanstack/table-core"],
    banner: {
        js: '"use client";',
    },
    outDir: "lib",
    ...options
}));
