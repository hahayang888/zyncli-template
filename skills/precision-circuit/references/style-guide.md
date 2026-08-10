# Precision Circuit style guide

## Visual DNA

Rigorous editorial engineering schematic with orthogonal cobalt traces, measured modules, explicit junctions, and one highlighted control path.

- Aspect ratio: 16:9 horizontal
- Canvas: off-white technical stock with an invisible grid, wide margins, and no page furniture or slide frame
- Rendering language: uniform signal traces, precise right-angle routing, sectional modules, measured spacing, and one coral intervention point
- Minimum whitespace: 29%
- Maximum subject coverage: 67%
- Typography: Use only 3-10 concise supplied identifiers in a consistent technical sans; never invent specifications, values, or paragraphs.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#173B8F` | primary structure and focal subject |
| Palette 2 | `#5E7BC8` | supporting contrast and secondary forms |
| Palette 3 | `#F16B55` | accent for emphasis and directional cues |
| Palette 4 | `#ECEEF2` | restrained supporting accent |

## Must

- each line has a start and endpoint
- junction logic is unambiguous
- one active path dominates
- module hierarchy is measurable
- annotation remains sparse

## Never

- random circuit-board texture
- motherboard illustration
- cyberpunk interface
- dashboard
- decorative arrows
- dense electronics diagram

## Negative constraints

- no logo
- no fake numbers
- no pseudo-writing
- no browser chrome
- no glowing neon
- no stock technology icons

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

- routing bus
- control gate
- signal junction
- isolated module
- feedback loop
- redundant path
- filter stage
- boundary rail

Action pool:

- route
- gate
- isolate
- amplify
- bypass
- synchronize
- verify
- interrupt

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Rigorous editorial engineering schematic with orthogonal cobalt traces, measured modules, explicit junctions, and one highlighted control path.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #173B8F, #5E7BC8, #F16B55, #ECEEF2
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- routing can be followed
- active path is obvious
- labels are real
- spacing is disciplined
- schematic explains one relationship

Failure signals:

- decorative circuit pattern
- untraceable lines
- too many modules
- invented specifications
- looks like a PCB
