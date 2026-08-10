# Process Cutaway style guide

## Visual DNA

Scientific editorial cutaway of an invented but coherent instrument whose chambers, filters, gates, and output path make one transformation inspectable.

- Aspect ratio: 16:9 horizontal
- Canvas: clean warm technical paper with one large sectional instrument, sparse callouts, and generous exterior space
- Rendering language: precise sectional drawing, restrained material hatching, functional color coding, visible internal paths, and consistent callout rules
- Minimum whitespace: 25%
- Maximum subject coverage: 71%
- Typography: Use only 4-10 concise supplied labels; never invent dimensions, performance figures, component codes, or paragraphs.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#1D3B68` | primary structure and focal subject |
| Palette 2 | `#5B759E` | supporting contrast and secondary forms |
| Palette 3 | `#E16A48` | accent for emphasis and directional cues |
| Palette 4 | `#E8E2D7` | restrained supporting accent |

## Must

- input-to-output path is visible
- internal stages have distinct functions
- cutaway plane is consistent
- one active transformation
- annotation is subordinate

## Never

- patent drawing copy
- steampunk machine
- spaceship blueprint
- dense engineering manual
- dashboard overlay
- decorative gears

## Negative constraints

- no logo
- no invented numbers
- no pseudo-writing
- no unnecessary gears
- no glowing sci-fi core
- no page title

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

- filter chamber
- conversion drum
- inspection window
- routing valve
- pressure gate
- sorting tray
- output rail
- sectioned housing

Action pool:

- filter
- convert
- separate
- compress
- inspect
- route
- calibrate
- release

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Scientific editorial cutaway of an invented but coherent instrument whose chambers, filters, gates, and output path make one transformation inspectable.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #1D3B68, #5B759E, #E16A48, #E8E2D7
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- transformation can be followed
- section logic is coherent
- labels are real
- color coding has purpose
- instrument is original

Failure signals:

- random machine parts
- too many callouts
- invented specifications
- cutaway plane changes
- looks like science fiction
