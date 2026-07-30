# Technical Field Notes style guide

## Visual DNA

Inventor's field-notes illustration combining graphite construction, confident ink, sparse functional color, and one believable physical mechanism for an abstract system.

- Aspect ratio: 16:9 horizontal
- Canvas: neutral cream or white notebook paper with open margins and no formal presentation frame
- Rendering language: precise ink structure, exploratory graphite underdrawing, sparse cobalt and safety-orange functional accents, and credible cutaway logic
- Minimum whitespace: 28%
- Maximum subject coverage: 68%
- Typography: No readable labels, dimensions, equations, pseudo-writing, or title; mechanism logic must work visually.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#272B2F` | primary structure and focal subject |
| Palette 2 | `#597CA2` | supporting contrast and secondary forms |
| Palette 3 | `#E47C35` | accent for emphasis and directional cues |
| Palette 4 | `#F3EBDD` | restrained supporting accent |

## Must

- one central invented mechanism
- no more than two supporting studies
- believable functional relationship
- visible graphite-to-ink hierarchy
- accent color with a functional role
- editorial imperfection

## Never

- CAD render
- patent-copy imitation
- blueprint cliché
- school worksheet
- dense equations
- formal engineering title block
- dashboard UI
- decorative arrows

## Negative constraints

- no text
- no numerals
- no pseudo-writing
- no logo
- no UI
- no blueprint grid
- no photorealistic machinery
- no excessive callouts

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

- routing selector
- mechanical filter
- cutaway gate
- tension reel
- sorting table
- hinged channel
- pressure chamber
- signal loom

Action pool:

- route
- filter
- tune
- divert
- compress
- release
- sequence
- calibrate

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Inventor's field-notes illustration combining graphite construction, confident ink, sparse functional color, and one believable physical mechanism for an abstract system.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #272B2F, #597CA2, #E47C35, #F3EBDD
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- mechanism is understandable without labels
- supporting studies remain subordinate
- sketch quality feels intentional
- accent colors carry function
- quiet paper remains visible
- no text-like gibberish

Failure signals:

- looks like CAD
- mechanism has no logic
- too many diagrams
- fake handwriting
- dense arrow field
- classroom worksheet
