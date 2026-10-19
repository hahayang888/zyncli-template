# Botanical Contraptions style guide

## Visual DNA

Original botanical editorial engravings of impossible but internally coherent plant mechanisms, with fine green linework, copper details, visible grafts and restrained specimen-like composition.

- Aspect ratio: 16:9 horizontal
- Canvas: pale cool specimen-paper field containing one imaginary plant structure without labels or scientific numbering
- Rendering language: fine engraved leaf veins, controlled crosshatching, lightly tinted washes and precise organic joins
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#28594C` | primary structure and focal subject |
| Palette 2 | `#C57B48` | supporting contrast and secondary forms |
| Palette 3 | `#B2C7AB` | accent for emphasis and directional cues |
| Palette 4 | `#EFF0E5` | restrained supporting accent |

## Must

- one coherent botanical mechanism
- visible root or graft relationship
- clear distinction from a real specimen
- fine authored linework

## Never

- scientific claim of a real species
- decorative floral wreath
- steampunk gears
- fake Latin labels

## Negative constraints

- no scientific claim of a real species
- no decorative floral wreath
- no steampunk gears
- no fake Latin labels
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

- grafted stem
- root bridge
- branching valve
- protective seedpod
- interlocked tendrils

Action pool:

- graft
- branch
- support
- open
- redirect

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Original botanical editorial engravings of impossible but internally coherent plant mechanisms, with fine green linework, copper details, visible grafts and restrained specimen-like composition.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #28594C, #C57B48, #B2C7AB, #EFF0E5
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- one coherent botanical mechanism
- visible root or graft relationship
- clear distinction from a real specimen
- fine authored linework
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- scientific claim of a real species
- decorative floral wreath
- steampunk gears
- fake Latin labels
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
