# Pop-up Paradox style guide

## Visual DNA

Photographed pop-up-book editorial constructions made from bright folded cardstock, visible V-folds, tabs and paper hinges, with a single physically possible unfolding action.

- Aspect ratio: 16:9 horizontal
- Canvas: open unprinted book on a pale surface, viewed obliquely with room around the paper construction
- Rendering language: crisp card edges, visible folds, real cast shadows and matte printed color, no loose paper confetti
- Minimum whitespace: 25%
- Maximum subject coverage: 70%
- Typography: No text, lettering, numbers, logo, word balloons or UI. Put explanations in the surrounding article.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#D74E86` | primary structure and focal subject |
| Palette 2 | `#63B9AF` | supporting contrast and secondary forms |
| Palette 3 | `#F4D851` | accent for emphasis and directional cues |
| Palette 4 | `#F4EDE7` | restrained supporting accent |

## Must

- visible pop-up mechanics
- one book-based stage
- plausible paper support
- meaningful layer relationship

## Never

- flat cut-paper collage
- white architectural model
- printed book text
- fantasy castle filler

## Negative constraints

- no flat cut-paper collage
- no white architectural model
- no printed book text
- no fantasy castle filler
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

- paper hinge
- V-fold bridge
- layered card gate
- folding staircase
- linked pull tab

Action pool:

- unfold
- lift
- reveal
- interlock
- open

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Photographed pop-up-book editorial constructions made from bright folded cardstock, visible V-folds, tabs and paper hinges, with a single physically possible unfolding action.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #D74E86, #63B9AF, #F4D851, #F4EDE7
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- visible pop-up mechanics
- one book-based stage
- plausible paper support
- meaningful layer relationship
- The article-specific relationship reads at thumbnail size.
- Change the main object and spatial arrangement between examples.

Failure signals:

- flat cut-paper collage
- white architectural model
- printed book text
- fantasy castle filler
- The scene decorates the topic without expressing the passage.
- Repeated composition or metaphor.
