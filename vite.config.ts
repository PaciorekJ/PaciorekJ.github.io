import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
    ],
    build: {
        sourcemap: true,
        target: "es2022",
        cssMinify: true,
        chunkSizeWarningLimit: 1500,
    },
});
