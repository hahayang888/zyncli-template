# Scratchboard Sparks style guide

## Visual DNA

High-contrast scratchboard editorial engraving with a dense matte-black ground, fine ivory incised hatching, controlled lime-yellow reveals, and crisp directional light.

- Aspect ratio: 16:9 horizontal
- Canvas: near-black inked board with a single carved subject and uninterrupted dark margins
- Rendering language: thin subtractive cuts and crosshatching, dense-to-open tonal transitions, tactile scraped edges rather than broad woodcut blocks
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#202523` | primary structure and focal subject |
| Palette 2 | `#F0F0DA` | supporting contrast and secondary forms |
| Palette 3 | `#DBE66C` | accent for emphasis and directional cues |

## Must

- fine incised white marks
- one reveal or pressure point
- black remains the dominant field
- small acidic highlight

## Never

- broad linocut shapes
- chalk smudges
- photorealistic night scene
- glowing neon wireframe

## Negative constraints

- no broad linocut shapes
- no chalk smudges
- no photorealistic night scene
- no glowing neon wireframe
- no logo
- no watermark
- no invented statistics
- no readable text

## Composition patterns

### Focal metaphor

Best for: core argument, abstract concept.

Build one dominant physical metaphor around the article's central relationship.

### Contrast

Best for: before and after, tradeoff, tension.

Use two clearly different states joined by one meaningful transition.

### Process

Best for: workflow, cause and effect, transformation.

Show only the essential stages and make the change itself visually dominant.

### System relationship

Best for: framework, network, components.

Limit the system to three to five meaningful parts with an obvious hierarchy.

### Narrative scene

Best for: human consequence, decision, editorial tension.

Stage one decisive moment rather than summarizing the whole article.

## Metaphor method

1. Translate the abstract relationship into a physical arrangement.
2. Choose one object family suited to the visual medium.
3. Make the decisive change visible without relying on a headline.

Object pool:

- carved aperture
- hollow branch
- exposed hinge
- incised shell
- lit seam

Action pool:

- reveal
- split
- trace
- uncover
- pierce

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: High-contrast scratchboard editorial engraving with a dense matte-black ground, fine ivory incised hatching, controlled lime-yellow reveals, and crisp directional light.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #202523, #F0F0DA, #DBE66C
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- fine incised white marks
- one reveal or pressure point
- black remains the dominant field
- small acidic highlight
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- broad linocut shapes
- chalk smudges
- photorealistic night scene
- glowing neon wireframe
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
