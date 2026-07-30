# Midnight Ink style guide

## Visual DNA

Cinematic conceptual ink illustration using deep tonal fields, narrow light, symbolic scale, and controlled narrative tension.

- Aspect ratio: 16:9 horizontal
- Canvas: near-black or midnight field with one restrained illuminated zone and large atmospheric negative space
- Rendering language: ink-like silhouettes, dry-brush edges, soft grain, and sharply controlled beams of light
- Minimum whitespace: 34%
- Maximum subject coverage: 62%
- Typography: No text by default; when essential, use one or two tiny neutral labels outside the focal scene.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#171c2a` | primary structure and focal subject |
| Palette 2 | `#d4b472` | supporting contrast and secondary forms |
| Palette 3 | `#8d554f` | accent for emphasis and directional cues |

## Must

- one symbolic subject
- dramatic light logic
- deep tonal separation
- narrative tension
- large quiet darkness

## Never

- horror poster
- cyberpunk neon city
- movie title treatment
- busy sci-fi interface
- graphic violence
- generic hacker imagery

## Negative constraints

- no neon rainbow
- no poster headline
- no gore
- no dense background
- no glowing UI panels
- no lens flare

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

- doorway
- beam
- well
- sealed room
- distant tower
- mirror
- black box
- narrow bridge

Action pool:

- search
- cross
- expose
- hide
- observe
- open
- trace
- confront

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Cinematic conceptual ink illustration using deep tonal fields, narrow light, symbolic scale, and controlled narrative tension.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #171c2a, #d4b472, #8d554f
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- light directs the reading
- symbol remains clear
- darkness preserves detail
- scene feels editorial
- tension comes from composition

Failure signals:

- too dark to read
- looks like entertainment key art
- neon cliché
- too many props
- literal technology imagery
