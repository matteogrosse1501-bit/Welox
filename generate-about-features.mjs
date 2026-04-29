import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const API_KEY = "97cd6cf0af3949c15e115c8c9ac89fda";
const BASE = "https://api.kie.ai";
const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, "public", "images");

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const images = [
  {
    name: "about-feature-1",
    aspect_ratio: "2:3",
    prompt:
      "Ultra-sharp portrait of a sleek dark studio monitor displaying a minimal luxury website design, precise typography on screen, warm amber and gold highlights against deep black background, shallow depth of field, cinematic editorial photography, photorealistic, 8K",
  },
  {
    name: "about-feature-2",
    aspect_ratio: "2:3",
    prompt:
      "Dark minimal workspace with open notebook showing strategy diagrams, premium pen, subtle warm lighting, dark wooden desk, moody editorial atmosphere, luxury creative agency aesthetic, sharp focus, portrait composition, photorealistic 8K",
  },
  {
    name: "about-feature-3",
    aspect_ratio: "2:3",
    prompt:
      "Two creative professionals collaborating over a large dark monitor showing brand design work, modern luxury studio office, warm ambient lighting, dark walls, focused composition, editorial photography style, portrait format, photorealistic",
  },
  {
    name: "about-feature-4",
    aspect_ratio: "2:3",
    prompt:
      "Dark elegant dashboard interface showing upward growth metrics and conversion charts, gold accent data visualizations, minimal dark UI on screen, dramatic studio lighting, luxury analytics aesthetic, portrait composition, photorealistic 8K",
  },
];

async function createTask(img) {
  const res = await fetch(`${BASE}/api/v1/jobs/createTask`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "nano-banana-2",
      input: {
        prompt: img.prompt,
        resolution: "2K",
        aspect_ratio: img.aspect_ratio,
        output_format: "jpg",
      },
    }),
  });
  const data = await res.json();
  console.log(`Created task for ${img.name}:`, JSON.stringify(data));
  return data;
}

async function pollTask(taskId, name, maxWait = 360000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    await new Promise((r) => setTimeout(r, 8000));
    const res = await fetch(
      `${BASE}/api/v1/jobs/recordInfo?taskId=${taskId}`,
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
    const json = await res.json();
    const data = json.data;
    console.log(`Poll ${name}: state=${data?.state}`);
    if (data?.state === "success") {
      const result = JSON.parse(data.resultJson);
      return result.resultUrls[0];
    }
    if (data?.state === "failed" || data?.state === "error") {
      throw new Error(`Task ${name} failed`);
    }
  }
  throw new Error(`Timeout waiting for ${name}`);
}

async function downloadImage(url, name) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = join(OUT, `${name}.jpg`);
  writeFileSync(path, buf);
  console.log(`Saved ${name}.jpg → ${path}`);
  return `/images/${name}.jpg`;
}

const results = {};

for (const img of images) {
  try {
    console.log(`\nCreating task for: ${img.name}`);
    const taskResult = await createTask(img);
    const taskId =
      taskResult.taskId ||
      taskResult.data?.taskId ||
      taskResult.id ||
      taskResult.data?.id;

    if (!taskId) {
      console.error(`No taskId for ${img.name}. Full response:`, JSON.stringify(taskResult));
      results[img.name] = null;
      continue;
    }

    console.log(`TaskId: ${taskId} — polling...`);
    const url = await pollTask(taskId, img.name);
    const localPath = await downloadImage(url, img.name);
    results[img.name] = localPath;
  } catch (e) {
    console.error(`Failed ${img.name}:`, e.message);
    results[img.name] = null;
  }
}

writeFileSync(
  join(__dir, "about-feature-results.json"),
  JSON.stringify(results, null, 2)
);
console.log("\n=== Done ===\nResults:", results);
