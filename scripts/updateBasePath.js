import FileHound from "filehound";
import fs from "fs";

const basePath = process.argv[2] || null;

if (!basePath) {
  console.error(`[${process.argv[1]}] No base path provided - exiting!`);
  process.exit(1);
}

processFiles("html");

async function findFiles(extension) {
  const files = FileHound.create().paths("./docs").ext(extension).find();
  return files;
}

async function processFiles(extension = "html") {
  const files = await findFiles(extension);
  files.forEach((fileName) => {
    updateHref(fileName);
  });
}

function updateHref(fileName) {
  const html = fs.readFileSync(fileName, "utf8");
  const html2 = html.replace(/href="\//g, `href=\"${basePath}\/`);
  fs.writeFileSync(fileName, html2);
  console.log("Wrote path updates to", fileName);
}
