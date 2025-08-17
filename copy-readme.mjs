import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = join(__dirname, "README.md");
const dest = join(__dirname, "dist/README.md");

try {
  await fs.ensureFile(dest); // Ensure destination file can be created
  await fs.copy(source, dest, { overwrite: true, errorOnExist: false });
  console.log("Successfully copied README.md to dist");
} catch (error) {
  console.error("Error copying README.md:", error);
  process.exit(1);
}
