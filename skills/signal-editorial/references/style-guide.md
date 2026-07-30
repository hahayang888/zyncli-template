# Signal Editorial style guide

## Visual DNA

Bold contemporary magazine illustration using flat geometric framing, decisive cropping, and one editorial focal point.

- Aspect ratio: 16:9 horizontal
- Canvas: clean warm-white or one controlled flat color field; no decorative background clutter
- Rendering language: crisp geometric silhouettes, confident blocks, selective cut-paper edges, and restrained editorial detail
- Minimum whitespace: 22%
- Maximum subject coverage: 72%
- Typography: No headline inside the image; allow at most 3 short functional labels when the concept requires them.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#eb5f4b` | primary structure and focal subject |
| Palette 2 | `#f5c752` | supporting contrast and secondary forms |
| Palette 3 | `#203653` | accent for emphasis and directional cues |

## Must

- one dominant focal point
- clear foreground and background relationship
- bold crop or scale contrast
- limited palette
- editorial rather than advertising tone

## Never

- stock-photo collage
- corporate slide
- dashboard UI
- generic isometric office
- decorative gradients
- tiny repeated icons
- headline in a corner

## Negative constraints

- no stock photography
- no photorealistic faces
- no glossy advertising finish
- no presentation frame
- no dense text

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

- window
- signal tower
- lever
- bridge
- lens
- stage
- threshold
- stacked blocks
- cutaway room

Action pool:

- crop
- reveal
- separate
- magnify
- balance
- connect
- interrupt
- redirect

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Bold contemporary magazine illustration using flat geometric framing, decisive cropping, and one editorial focal point.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #eb5f4b, #f5c752, #203653
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- strong editorial hierarchy
- one visual thesis
- palette remains limited
- crop feels intentional
- readable at article width

Failure signals:

- looks like a banner ad
- too many equal elements
- weak focal point
- generic business clip art
- decorative color without meaning
