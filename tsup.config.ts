import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
    splitting: true,
    entry: ["./src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: true,
    external: ["react", "react-dom"],
    banner: {
        js: '"use client";',
    },
    outDir: "lib",
    ...options
}))
