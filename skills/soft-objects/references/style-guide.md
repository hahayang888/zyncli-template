# Soft Objects style guide

## Visual DNA

Friendly sculptural 3D editorial scenes built from rounded tactile objects, gentle studio light, and optimistic spatial metaphors.

- Aspect ratio: 16:9 horizontal
- Canvas: soft neutral studio field with subtle ground contact and uncluttered depth
- Rendering language: rounded modeled forms, matte clay-like materials, soft bevels, and simple controlled lighting
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: Avoid text inside the render; use at most three simple object labels only when essential.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#ee8068` | primary structure and focal subject |
| Palette 2 | `#a8c8bd` | supporting contrast and secondary forms |
| Palette 3 | `#f3d5a3` | accent for emphasis and directional cues |

## Must

- tactile matte materials
- soft coherent lighting
- one spatial metaphor
- friendly but not childish forms
- clear object scale

## Never

- toy advertisement
- emoji character
- glassmorphism UI
- plastic gloss
- complex room set
- floating decorative blobs
- brand logo imitation

## Negative constraints

- no glossy plastic
- no childish face
- no text headline
- no cluttered props
- no dramatic lens effects
- no transparent UI

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

- soft blocks
- arch
- path
- vessel
- platform
- loop
- hinge
- stack

Action pool:

- assemble
- support
- connect
- lift
- balance
- open
- align
- grow

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Friendly sculptural 3D editorial scenes built from rounded tactile objects, gentle studio light, and optimistic spatial metaphors.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #ee8068, #a8c8bd, #f3d5a3
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- materials are matte and tactile
- lighting is gentle
- metaphor is immediately legible
- forms feel designed
- composition works at thumbnail size

Failure signals:

- looks like a toy catalog
- generic floating shapes
- overly glossy
- weak contact shadows
- too many pastel colors
