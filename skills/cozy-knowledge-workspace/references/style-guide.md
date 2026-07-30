# Cozy Knowledge Workspace style guide

## Visual DNA

Warm inhabited knowledge-work scenes rendered in gouache and colored pencil, where organized object clusters reveal input, thinking, repetition, and output.

- Aspect ratio: 16:9 horizontal
- Canvas: compact studio, archive, or workspace with one quiet region and environmental detail organized into clear conceptual clusters
- Rendering language: soft gouache, colored-pencil texture, warm wood and cream paper, deep blue-green anchors, muted amber, and selective coral accents
- Minimum whitespace: 20%
- Maximum subject coverage: 74%
- Typography: All notes, books, screens, and paper surfaces remain blank or contain only non-letter pictorial shapes.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#1F3B42` | primary structure and focal subject |
| Palette 2 | `#B77B42` | supporting contrast and secondary forms |
| Palette 3 | `#D9B86E` | accent for emphasis and directional cues |
| Palette 4 | `#C96451` | restrained supporting accent |

## Must

- one dominant human action
- organized prop families
- believable inhabited depth
- warm tactile surfaces
- one secondary narrative detail
- clear input-to-output relationship without a formal diagram

## Never

- furniture catalog
- generic cozy décor
- cottagecore excess
- perfect 3D interior
- unstructured clutter
- branded devices
- illegible paper text
- decorative room without an argument

## Negative constraints

- no text
- no pseudo-writing
- no logo
- no branded device
- no photorealistic interior
- no excessive props
- no UI screenshot
- no decorative-only plants

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

- desk ecosystem
- archive shelf
- sorting studio
- cutaway workshop
- idea cabinet
- material library
- working alcove
- tool wall

Action pool:

- select
- sort
- assemble
- compare
- archive
- retrieve
- refine
- handoff

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Warm inhabited knowledge-work scenes rendered in gouache and colored pencil, where organized object clusters reveal input, thinking, repetition, and output.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #1F3B42, #B77B42, #D9B86E, #C96451
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- focal action reads before room detail
- props explain rather than decorate
- clusters remain organized
- warmth preserves contrast
- paper surfaces contain no pseudo-text

Failure signals:

- room overwhelms the idea
- too many unrelated props
- generic cozy illustration
- paper text appears
- catalog staging
- weak human action
