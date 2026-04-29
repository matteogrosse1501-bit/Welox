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
    name: "hero-main",
    aspect_ratio: "16:9",
    prompt:
      "Cinematic dark minimalist digital agency workspace, ultra-wide shot, multiple glowing monitors displaying beautiful web designs, dramatic moody lighting with warm amber highlights, deep black and charcoal tones, luxury studio atmosphere, high-end photography style, photorealistic, 8K",
  },
  {
    name: "work-ecommerce",
    aspect_ratio: "4:3",
    prompt:
      "Premium luxury e-commerce website displayed on a sleek iMac in a dark studio, moody cinematic lighting, gold accent highlights, product photography aesthetic, shallow depth of field, photorealistic, ultra high quality",
  },
  {
    name: "work-brand",
    aspect_ratio: "4:3",
    prompt:
      "Sophisticated luxury fashion brand identity website on a MacBook Pro, dark background, editorial photography style, elegant typography visible on screen, warm tones, professional photography, photorealistic",
  },
  {
    name: "work-fintech",
    aspect_ratio: "4:3",
    prompt:
      "Cutting-edge fintech dashboard app on multiple screens, dark UI with emerald green data visualizations, sleek modern office environment, dramatic lighting, high contrast, photorealistic, ultra sharp",
  },
  {
    name: "work-realestate",
    aspect_ratio: "4:3",
    prompt:
      "Architectural real estate website on a large monitor, striking photography of luxury building visible, minimalist dark interface, ambient studio lighting, professional product photography, photorealistic",
  },
  {
    name: "about-studio",
    aspect_ratio: "16:9",
    prompt:
      "Modern luxury creative agency interior, dark walls with warm pendant lighting, designer furniture, large screens showing creative work, exposed brick elements, cozy yet professional atmosphere, architectural photography, photorealistic",
  },
  {
    name: "services-hero",
    aspect_ratio: "16:9",
    prompt:
      "Abstract dark elegant background with flowing geometric light streaks in gold and amber, representing digital transformation and design excellence, minimalist composition, luxury aesthetic, 8K render quality",
  },
  {
    name: "contact-hero",
    aspect_ratio: "16:9",
    prompt:
      "Sophisticated dark office reception with warm golden lighting, marble surfaces, minimalist design elements, plants, luxury modern interior design, architectural photography, photorealistic high quality",
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

async function pollTask(taskId, name, maxWait = 300000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    await new Promise((r) => setTimeout(r, 5000));
    // Try multiple polling patterns
    for (const url of [
      `${BASE}/api/v1/jobs/${taskId}`,
      `${BASE}/api/v1/jobs/getTask?taskId=${taskId}`,
      `${BASE}/api/v1/jobs/getTaskInfo?taskId=${taskId}`,
    ]) {
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${API_KEY}` },
        });
        if (res.ok) {
          const data = await res.json();
          console.log(`Poll ${name} (${url}):`, JSON.stringify(data).slice(0, 200));
          const status = data.status || data.data?.status || data.state;
          const outputUrl =
            data.output?.url ||
            data.data?.output?.url ||
            data.result?.url ||
            data.data?.result?.url ||
            (Array.isArray(data.output) && data.output[0]);
          if (outputUrl) return outputUrl;
          if (status === "failed" || status === "error") throw new Error(`Task ${name} failed`);
          break;
        }
      } catch (e) {
        // try next url pattern
      }
    }
  }
  throw new Error(`Timeout waiting for ${name}`);
}

async function downloadImage(url, name) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = join(OUT, `${name}.jpg`);
  writeFileSync(path, buf);
  console.log(`Saved ${name}.jpg`);
  return `/images/${name}.jpg`;
}

async function main() {
  console.log("Creating image generation tasks...\n");
  const tasks = [];
  for (const img of images) {
    try {
      const result = await createTask(img);
      const taskId =
        result.taskId || result.data?.taskId || result.id || result.data?.id;
      tasks.push({ ...img, taskId, raw: result });
    } catch (e) {
      console.error(`Failed to create task for ${img.name}:`, e.message);
    }
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log("\nWaiting for images to generate...\n");
  const results = {};
  for (const task of tasks) {
    if (!task.taskId) {
      console.log(`Skipping ${task.name} — no taskId returned`);
      continue;
    }
    try {
      const url = await pollTask(task.taskId, task.name);
      const localPath = await downloadImage(url, task.name);
      results[task.name] = localPath;
    } catch (e) {
      console.error(`Failed to get ${task.name}:`, e.message);
      results[task.name] = null;
    }
  }

  writeFileSync(join(__dir, "image-results.json"), JSON.stringify(results, null, 2));
  console.log("\nDone! Results:", results);
}

main().catch(console.error);
