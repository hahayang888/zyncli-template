# Comic Pressure style guide

## Visual DNA

Wordless two-panel editorial comics with Ben-Day dots, bold dark outlines, limited cyan-magenta-yellow print color and a clear visual change between panels.

- Aspect ratio: 16:9 horizontal
- Canvas: two purposeful horizontal panels separated by a clean gutter on pale newsprint, with no page heading or word balloons
- Rendering language: bold ink contours, visible halftone dots, slightly imperfect print registration and clean acting silhouettes
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#183D50` | primary structure and focal subject |
| Palette 2 | `#D64C69` | supporting contrast and secondary forms |
| Palette 3 | `#E3C64C` | accent for emphasis and directional cues |
| Palette 4 | `#F1EEDB` | restrained supporting accent |

## Must

- two readable sequential panels
- same subject across the change
- visible causal action
- limited print palette

## Never

- speech balloons
- comic sound-effect words
- superhero franchise cues
- unrelated montage panels

## Negative constraints

- no speech balloons
- no comic sound-effect words
- no superhero franchise cues
- no unrelated montage panels
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

- ordinary worker
- overloaded inbox tray
- jammed gate
- oversized lever
- shared worktable

Action pool:

- notice
- try
- jam
- change
- resolve

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Wordless two-panel editorial comics with Ben-Day dots, bold dark outlines, limited cyan-magenta-yellow print color and a clear visual change between panels.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #183D50, #D64C69, #E3C64C, #F1EEDB
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- two readable sequential panels
- same subject across the change
- visible causal action
- limited print palette
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- speech balloons
- comic sound-effect words
- superhero franchise cues
- unrelated montage panels
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
