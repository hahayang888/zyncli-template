# Cyanotype Evidence style guide

## Visual DNA

Archival cyanotype collage using Prussian-blue photograms, solar exposure texture, and sparse coral stitched traces to connect pieces of evidence without becoming a formal diagram.

- Aspect ratio: 16:9 horizontal
- Canvas: fibrous off-white or exposed blue paper with irregular photographic edges and one calm archival arrangement
- Rendering language: cyanotype silhouettes, contact-print halos, botanical or architectural fragments, stitched coral thread, and selective paper overlap
- Minimum whitespace: 26%
- Maximum subject coverage: 69%
- Typography: No generated prose; allow at most four supplied archival identifiers rendered as clear typewritten labels outside the photograms.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#0A3474` | primary structure and focal subject |
| Palette 2 | `#315EA1` | supporting contrast and secondary forms |
| Palette 3 | `#E85E55` | accent for emphasis and directional cues |
| Palette 4 | `#E7E2D7` | restrained supporting accent |

## Must

- recognizable photogram material
- one evidence relationship
- Prussian-blue tonal depth
- coral stitch used as logic
- archival asymmetry

## Never

- blueprint UI
- engineering plan
- scrapbook nostalgia
- decorative botanical print
- fake handwriting
- dense specimen grid

## Negative constraints

- no brand logos
- no invented dates
- no pseudo-text
- no neon blue
- no glossy digital collage
- no copied historical document

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

- photogram fragments
- architectural section
- botanical specimen
- tool silhouette
- stitched route
- exposure window
- evidence sleeve
- contact-print sequence

Action pool:

- expose
- connect
- archive
- compare
- trace
- layer
- reveal
- preserve

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Archival cyanotype collage using Prussian-blue photograms, solar exposure texture, and sparse coral stitched traces to connect pieces of evidence without becoming a formal diagram.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #0A3474, #315EA1, #E85E55, #E7E2D7
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- cyanotype process is visually credible
- thread connects meaningfully
- evidence remains specific
- archive feels original
- composition breathes

Failure signals:

- looks like decorative blue wallpaper
- stitches are random
- too many equal fragments
- fake document text appears
- photograms lack material texture
