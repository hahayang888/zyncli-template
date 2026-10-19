# Matchbox Worlds style guide

## Visual DNA

Macro photography of hand-built miniature editorial dioramas with painted basswood, tiny adult figures, precise physical mechanisms, slight craft imperfections, and restrained shallow depth of field.

- Aspect ratio: 16:9 horizontal
- Canvas: quiet pale sage tabletop with one open model and no packaging or display text
- Rendering language: small painted wood surfaces, handmade joints, scale-aware props and believable macro light
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#336B68` | primary structure and focal subject |
| Palette 2 | `#B86D50` | supporting contrast and secondary forms |
| Palette 3 | `#E4CB8D` | accent for emphasis and directional cues |
| Palette 4 | `#E7EFEB` | restrained supporting accent |

## Must

- consistent miniature scale
- one inspectable mechanism
- sharp focal action
- visible handmade construction

## Never

- generic isometric office
- digital game render
- toy packaging
- tilt-shift blur hiding the action

## Negative constraints

- no generic isometric office
- no digital game render
- no toy packaging
- no tilt-shift blur hiding the action
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

- tiny loading platform
- basswood bridge
- small workbench
- miniature sorting room
- movable wall

Action pool:

- inspect
- reroute
- assemble
- carry
- repair

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Macro photography of hand-built miniature editorial dioramas with painted basswood, tiny adult figures, precise physical mechanisms, slight craft imperfections, and restrained shallow depth of field.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #336B68, #B86D50, #E4CB8D, #E7EFEB
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- consistent miniature scale
- one inspectable mechanism
- sharp focal action
- visible handmade construction
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- generic isometric office
- digital game render
- toy packaging
- tilt-shift blur hiding the action
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
