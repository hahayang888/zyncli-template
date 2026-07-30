# Evidence Atlas style guide

## Visual DNA

Calm editorial information design combining one dominant evidence relationship, a few measured annotations, concise real labels, and a quiet modular field without dashboard or presentation chrome.

- Aspect ratio: 16:9 horizontal
- Canvas: warm white or pale stone field with an asymmetric editorial grid, one large evidence structure, and two or three small supporting measures
- Rendering language: precise vector forms, hairline rules, restrained navy and violet accents, soft gray measurement fields, subtle print texture, and disciplined alignment
- Minimum whitespace: 30%
- Maximum subject coverage: 66%
- Typography: Use only concise verbatim labels and values supplied in the brief; at most 12 text elements, no paragraphs, no pseudo-writing, and no invented statistics.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#263A72` | primary structure and focal subject |
| Palette 2 | `#6C65C8` | supporting contrast and secondary forms |
| Palette 3 | `#D3D7DF` | accent for emphasis and directional cues |
| Palette 4 | `#F5F2EC` | restrained supporting accent |

## Must

- one visual thesis
- one dominant evidence structure
- two or three supporting measures maximum
- clear annotation hierarchy
- consistent scale logic
- editorial asymmetry

## Never

- analytics dashboard
- grid of KPI cards
- PowerPoint template
- pie-chart collection
- dense legend
- decorative icons
- fake research data
- tiny footnotes

## Negative constraints

- no logo
- no invented values
- no pseudo-writing
- no paragraph
- no browser chrome
- no UI cards
- no 3D chart
- no rainbow palette
- no stock icon set

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

- measured field
- comparison rail
- layered evidence band
- annotated matrix
- distribution arc
- proportion ladder
- threshold map
- paired scale

Action pool:

- compare
- measure
- locate
- separate
- rank
- reveal
- trace
- validate

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Calm editorial information design combining one dominant evidence relationship, a few measured annotations, concise real labels, and a quiet modular field without dashboard or presentation chrome.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #263A72, #6C65C8, #D3D7DF, #F5F2EC
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- visual thesis reads before annotations
- all labels are concise and intentional
- measures use a consistent scale
- supporting evidence remains subordinate
- layout feels editorial rather than dashboard-like
- no data is fabricated

Failure signals:

- dashboard look
- too many equal charts
- fake numbers
- unreadable labels
- decorative metrics
- weak evidence hierarchy
