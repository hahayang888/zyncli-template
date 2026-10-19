# Sandtable Stories style guide

## Visual DNA

Macro editorial landscape sculptures in fine dry sand, with raked channels, carved ridges, small turquoise markers and directional low light that reveals the passage's physical relationship.

- Aspect ratio: 16:9 horizontal
- Canvas: shallow tabletop sand field with clean open margins and no map legend
- Rendering language: fine granular sand, delicate rake marks, crisp ridges and soft erosion, photographed close with controlled depth
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#C8B08C` | primary structure and focal subject |
| Palette 2 | `#338E92` | supporting contrast and secondary forms |
| Palette 3 | `#6C5948` | accent for emphasis and directional cues |
| Palette 4 | `#E5E3DA` | restrained supporting accent |

## Must

- sand remains granular
- routes respond to obstacles
- one dominant terrain relationship
- minimal turquoise accents

## Never

- desert travel photography
- invented geographic map
- sandbox toy scene
- topographic data visualization

## Negative constraints

- no desert travel photography
- no invented geographic map
- no sandbox toy scene
- no topographic data visualization
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

- raked channel
- sand ridge
- small marker
- narrow pass
- eroded wall

Action pool:

- channel
- erode
- redirect
- divide
- reshape

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Macro editorial landscape sculptures in fine dry sand, with raked channels, carved ridges, small turquoise markers and directional low light that reveals the passage's physical relationship.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #C8B08C, #338E92, #6C5948, #E5E3DA
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- sand remains granular
- routes respond to obstacles
- one dominant terrain relationship
- minimal turquoise accents
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- desert travel photography
- invented geographic map
- sandbox toy scene
- topographic data visualization
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
