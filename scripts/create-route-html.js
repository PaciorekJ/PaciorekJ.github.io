// scripts/create-route-html.js
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const ROUTES = [
    "/resume",
    "/skills",
    "/projects",
    "/projects/white-label-membership-platform",
    "/projects/routine-gym-journal",
    "/projects/fitnessbytes",
    "/projects/gamehwnd",
    "/experience",
    "/contact",
];

const DIST_DIR = "dist";
const SOURCE = join(DIST_DIR, "index.html");

for (const route of ROUTES) {
    const outputPath = join(DIST_DIR, route, "index.html");

    mkdirSync(dirname(outputPath), { recursive: true });
    copyFileSync(SOURCE, outputPath);
}
