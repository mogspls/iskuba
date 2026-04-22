import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "images", "facility");
    const files = await fs.readdir(dir);

    const images = files
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Failed to read facility images:", error);
    return NextResponse.json([], { status: 500 });
  }
}