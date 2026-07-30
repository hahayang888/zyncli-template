# Clarity Diagrams style guide

## Visual DNA

A precise editorial explainer system that turns frameworks and processes into calm, modular visual relationships.

- Aspect ratio: 16:9 horizontal
- Canvas: clean off-white field with a disciplined invisible grid and generous margins
- Rendering language: simple modular forms, consistent thin connectors, rounded structural shapes, and exact spacing
- Minimum whitespace: 30%
- Maximum subject coverage: 66%
- Typography: Use 2-8 concise labels with consistent scale; never use paragraphs or a slide-style title.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#426b66` | primary structure and focal subject |
| Palette 2 | `#f4b960` | supporting contrast and secondary forms |
| Palette 3 | `#f1eee5` | accent for emphasis and directional cues |

## Must

- one reading direction
- clear hierarchy
- consistent spacing
- few meaningful connectors
- editorial visual character

## Never

- PowerPoint slide
- dense system architecture
- flowchart symbols everywhere
- dashboard screenshot
- legend-heavy infographic
- decorative arrows

## Negative constraints

- no presentation border
- no top title
- no tiny text
- no more than eight labels
- no excessive nodes
- no realistic UI

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

- modules
- channels
- gates
- layers
- containers
- tracks
- loops
- bridges

Action pool:

- route
- filter
- group
- compare
- sequence
- transform
- branch
- merge

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: A precise editorial explainer system that turns frameworks and processes into calm, modular visual relationships.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #426b66, #f4b960, #f1eee5
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- hierarchy is obvious
- labels remain short
- spacing is consistent
- connectors carry meaning
- does not resemble a corporate slide

Failure signals:

- too many nodes
- unclear reading order
- tiny labels
- generic flowchart
- unnecessary legend
- weak visual rhythm
