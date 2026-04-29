import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const API_KEY = "97cd6cf0af3949c15e115c8c9ac89fda";
const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, "public", "images");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const tasks = [
  { name: "hero-main",      taskId: "abb00d9aa6da833c88fcd9d349e55081" },
  { name: "work-ecommerce", taskId: "4dc04e9b7f30a78fd79f7432e5af5109" },
  { name: "work-brand",     taskId: "c1c5266aed11f166704a59a38e229862" },
  { name: "work-fintech",   taskId: "ec002bb052221bc8e2bbacc87a9e5b41" },
  { name: "work-realestate",taskId: "90c0e66dc62cd81d1e8282a746cc7f56" },
  { name: "about-studio",   taskId: "0e7d53f5fa5dd5f15562b8e8f8960558" },
];

const results = {};

for (const { name, taskId } of tasks) {
  const res = await fetch(
    `https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );
  const json = await res.json();
  const data = json.data;
  console.log(`${name}: state=${data.state}`);

  if (data.state === "success") {
    const resultJson = JSON.parse(data.resultJson);
    const url = resultJson.resultUrls[0];
    console.log(`  URL: ${url}`);
    const imgRes = await fetch(url);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    const path = join(OUT, `${name}.jpg`);
    writeFileSync(path, buf);
    console.log(`  Saved → ${path}`);
    results[name] = `/images/${name}.jpg`;
  } else {
    console.log(`  Not ready: ${data.state}`);
    results[name] = null;
  }
}

writeFileSync(join(__dir, "image-results.json"), JSON.stringify(results, null, 2));
console.log("\nFinal results:", results);
