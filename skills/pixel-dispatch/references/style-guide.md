# Pixel Dispatch style guide

## Visual DNA

Authored low-resolution pixel-art editorial scenes with a visible square grid, controlled clusters, stepped silhouettes, limited flat colors, and a single cause-and-effect action.

- Aspect ratio: 16:9 horizontal
- Canvas: deep petrol or pale mint field with a compact side-view or top-down pixel stage
- Rendering language: deliberate square pixel clusters, hard stair-step edges, no antialiasing, no smooth vector outlines
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#162A30` | primary structure and focal subject |
| Palette 2 | `#B3E858` | supporting contrast and secondary forms |
| Palette 3 | `#6C8EC1` | accent for emphasis and directional cues |
| Palette 4 | `#EDF0D6` | restrained supporting accent |

## Must

- visible consistent pixel scale
- one actionable scene
- limited palette
- readable silhouettes before detail

## Never

- video-game HUD
- health bars
- inventory panels
- game screenshots
- smooth gradient painting

## Negative constraints

- no video-game HUD
- no health bars
- no inventory panels
- no game screenshots
- no smooth gradient painting
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

- pixel gate
- stepped bridge
- small courier
- modular crate
- forked tile path

Action pool:

- route
- carry
- unlock
- repair
- choose

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Authored low-resolution pixel-art editorial scenes with a visible square grid, controlled clusters, stepped silhouettes, limited flat colors, and a single cause-and-effect action.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #162A30, #B3E858, #6C8EC1, #EDF0D6
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- visible consistent pixel scale
- one actionable scene
- limited palette
- readable silhouettes before detail
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- video-game HUD
- health bars
- inventory panels
- game screenshots
- smooth gradient painting
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
