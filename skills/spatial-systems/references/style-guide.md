# Spatial Systems style guide

## Visual DNA

Editorial spatial information illustration combining simplified maps, sections, routes, infrastructure, and small human figures into one legible service or mobility system.

- Aspect ratio: 16:9 horizontal
- Canvas: clean white or pale gray field divided into two or three spatial zones with an obvious route and controlled civic color palette
- Rendering language: precise flat geometry, thin route lines, architectural sections, simplified map fragments, and crisp human-scale silhouettes
- Minimum whitespace: 27%
- Maximum subject coverage: 69%
- Typography: Use only supplied place names or 2-6 short functional labels; never invent metrics, addresses, or interface copy.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#315FC7` | primary structure and focal subject |
| Palette 2 | `#55CBB2` | supporting contrast and secondary forms |
| Palette 3 | `#D9DEE2` | accent for emphasis and directional cues |
| Palette 4 | `#162A47` | restrained supporting accent |

## Must

- one traceable route
- human scale
- two or three spatial views
- clear service relationship
- consistent map geometry

## Never

- navigation app screenshot
- dashboard
- dense transit map
- generic smart-city icons
- engineering blueprint
- decorative pins

## Negative constraints

- no brand
- no fake addresses
- no pseudo-text
- no browser chrome
- no 3D isometric city
- no excessive labels

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

- route section
- service corridor
- mobility loop
- shared station
- urban layer
- delivery chain
- public threshold
- infrastructure spine

Action pool:

- move
- connect
- transfer
- serve
- route
- access
- distribute
- coordinate

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Editorial spatial information illustration combining simplified maps, sections, routes, infrastructure, and small human figures into one legible service or mobility system.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #315FC7, #55CBB2, #D9DEE2, #162A47
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- route can be followed
- views belong to one system
- human scale is visible
- labels remain sparse
- image avoids app conventions

Failure signals:

- looks like a dashboard
- route is ambiguous
- too many equal panels
- pins are decorative
- spatial relationship is false
