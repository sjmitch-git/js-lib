import fs from "fs-extra";

await fs.copy("README.md", "dist/README.md");
