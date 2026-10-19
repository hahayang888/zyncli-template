# Tape Collisions style guide

## Visual DNA

Tactile editorial collages assembled from translucent colored adhesive tape, torn tape ends, trapped air bubbles and visible overlaps, using adhesive tension to express one relationship.

- Aspect ratio: 16:9 horizontal
- Canvas: cool pale gray board with a compact arrangement of translucent tape and large untouched margins
- Rendering language: irregular cut and torn tape edges, layered transparent color, tactile wrinkles and contact shadows
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#DA6848` | primary structure and focal subject |
| Palette 2 | `#4B8C9C` | supporting contrast and secondary forms |
| Palette 3 | `#D4BA65` | accent for emphasis and directional cues |
| Palette 4 | `#E7ECEA` | restrained supporting accent |

## Must

- visible adhesive overlap
- translucent material
- one structural tension
- tear or joint has a clear purpose

## Never

- opaque paper collage
- generic moodboard
- decorative tape border
- photographic cutout face

## Negative constraints

- no opaque paper collage
- no generic moodboard
- no decorative tape border
- no photographic cutout face
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

- tape bridge
- peeled strip
- overlapping seam
- tensioned band
- torn adhesive joint

Action pool:

- overlap
- peel
- hold
- stretch
- repair

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Tactile editorial collages assembled from translucent colored adhesive tape, torn tape ends, trapped air bubbles and visible overlaps, using adhesive tension to express one relationship.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #DA6848, #4B8C9C, #D4BA65, #E7ECEA
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- visible adhesive overlap
- translucent material
- one structural tension
- tear or joint has a clear purpose
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- opaque paper collage
- generic moodboard
- decorative tape border
- photographic cutout face
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
