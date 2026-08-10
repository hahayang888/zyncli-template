---
name: raw-logic
description: "Generate coherent Raw Logic editorial illustration sets with a reusable editorial visual system. Use when illustrating articles, blogs, newsletters, essays, or social posts that need deadpan editorial drawing using deliberately raw black lines, blunt flat objects, awkward scale, and one strange physical relationship to expose organizational friction or cultural contradiction."
---

# Raw Logic

Create a coherent set of article illustrations with the Raw Logic visual system. Reduce an organizational or cultural argument to one strange physical arrangement drawn with deliberately raw black linework. Sparse muted color and uncomfortable scale produce a smart, dry editorial voice without copying cartoon conventions or relying on punchline text.

Read [references/style-guide.md](references/style-guide.md) before planning or generating. Use the images in `assets/examples/` only for low-frequency visual calibration; never copy their composition, people, objects, or wording.

## Workflow

1. Read the full article or supplied passage.
2. Identify the core argument, contrasts, turning points, system relationships, and conclusion.
3. Select 1-9 cognitive anchors. Do not illustrate paragraphs at even intervals.
4. Write a shot plan before generating. Give each image one core idea, one structure, and a different primary composition.
5. Compile every shot with the visual DNA and negative constraints from the style guide.
6. Use the host agent's available image-generation tool. Generate one standalone 16:9 image per request.
7. Inspect every output against the QA checklist. Regenerate or make one targeted edit when a failure signal appears.
8. Deliver ordered files and preserve original generated files.

## Shot plan

For every proposed image, specify:

- Placement after the relevant passage
- Theme and core idea
- Purpose in the article
- Structure type
- Composition and reading direction
- Suggested elements
- Essential short labels, or none

Prioritize the core argument, contrasts, turning points, system relationships, cause and effect, and a memorable conclusion. Avoid decorative filler, repeated claims, and paragraphs already concrete without a visual.

## Generation rules

- Output one standalone 16:9 horizontal editorial image.
- Keep one core idea per image.
- Make the article-specific relationship visible without relying on a headline.
- Change both the main metaphor object and spatial arrangement between consecutive images.
- Preserve identity through material, palette, hierarchy, and composition grammar rather than repeating a scene.
- Use real supplied labels only. Never invent statistics, quotations, dates, brand marks, or interface copy.
- Respect every `must`, `never`, and negative constraint in the style guide.

## QA and iteration

Reject an output when it is generic, off-style, repetitive, text-heavy, anatomically broken, semantically wrong, or dependent on decoration instead of the article idea.

When revising:

- Generic: replace the stock scene with one article-specific physical relationship.
- Complex: remove secondary elements and preserve one focal idea.
- Repetitive: change both the object family and composition pattern.
- Off-style: return to the exact visual DNA in the style guide.
- Text-heavy: remove the headline and keep only essential supplied labels.

## Delivery

Name files in article order using `{order}-{topic-slug}.png`. Report where each image belongs in the article and preserve the original generated outputs.
