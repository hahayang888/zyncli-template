import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("skills");
const entries = await readdir(root, { withFileTypes: true });
const failures = [];

for (const entry of entries.filter((item) => item.isDirectory())) {
  const skillRoot = path.join(root, entry.name);
  const skillPath = path.join(skillRoot, "SKILL.md");
  const stylePath = path.join(skillRoot, "references", "style-guide.md");
  try {
    const body = await readFile(skillPath, "utf8");
    const frontmatter = body.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatter) failures.push(`${entry.name}: missing YAML frontmatter`);
    if (!new RegExp(`^name: ${entry.name}$`, "m").test(frontmatter?.[1] || "")) {
      failures.push(`${entry.name}: frontmatter name must match directory`);
    }
    if (!/^description: .{40,}$/m.test(frontmatter?.[1] || "")) {
      failures.push(`${entry.name}: description is missing or too short`);
    }
    await access(stylePath);
    await Promise.all(["01.webp", "02.webp", "03.webp"].map((file) =>
      access(path.join(skillRoot, "assets", "examples", file)),
    ));
  } catch (error) {
    failures.push(`${entry.name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${entries.filter((item) => item.isDirectory()).length} Zyncli Skills.`);
