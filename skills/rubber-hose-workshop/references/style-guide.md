# Rubber Hose Workshop style guide

## Visual DNA

Original early-animation-inspired editorial cartoons in black ink and off-white, with elastic limbs, expressive practical tools, rhythmic curved action, and one small vermilion accent. Adult characters have exactly two arms and two hands; limbs can stretch but never branch.

- Aspect ratio: 16:9 horizontal
- Canvas: off-white paper stage with sparse props and broad clear margins
- Rendering language: bold fluid ink contours, rubber-like curved limbs, selective solid black shadows, no digital airbrush
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#242321` | primary structure and focal subject |
| Palette 2 | `#F3F0E8` | supporting contrast and secondary forms |
| Palette 3 | `#D94B42` | accent for emphasis and directional cues |

## Must

- one clear physical gag
- original tool or adult character
- elastic action that explains the point
- restrained red accent

## Never

- existing cartoon characters
- franchise references
- speech balloons
- title cards
- grotesque body distortion

## Negative constraints

- no existing cartoon characters
- no franchise references
- no speech balloons
- no title cards
- no grotesque body distortion
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

- walking folder
- elastic stamp
- patient office worker
- bent filing tray
- stretched doorway

Action pool:

- stretch
- juggle
- stall
- untangle
- hand over

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Original early-animation-inspired editorial cartoons in black ink and off-white, with elastic limbs, expressive practical tools, rhythmic curved action, and one small vermilion accent. Adult characters have exactly two arms and two hands; limbs can stretch but never branch.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #242321, #F3F0E8, #D94B42
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- one clear physical gag
- original tool or adult character
- elastic action that explains the point
- restrained red accent
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- existing cartoon characters
- franchise references
- speech balloons
- title cards
- grotesque body distortion
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
