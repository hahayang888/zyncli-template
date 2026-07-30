# Noir Frames style guide

## Visual DNA

Cinematic monochrome editorial frames using near-black space, charcoal texture, one controlled light path, and small human scale to express consequential uncertainty.

- Aspect ratio: 16:9 horizontal
- Canvas: near-black field with retained shadow texture, a restrained illuminated zone, and large intellectual quiet
- Rendering language: charcoal and ink texture, soft gray separation, one narrow cool-white beam, and at most one muted amber signal
- Minimum whitespace: 34%
- Maximum subject coverage: 62%
- Typography: No title, caption, case-file text, screen text, or pseudo-writing.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#111719` | primary structure and focal subject |
| Palette 2 | `#D9D1BF` | supporting contrast and secondary forms |
| Palette 3 | `#A36B3E` | accent for emphasis and directional cues |

## Must

- one human decision or investigation
- one environmental obstacle
- light that explains the relationship
- web-legible shadow detail
- small human scale
- editorial rather than cinematic spectacle

## Never

- horror
- detective cliché
- weapons
- cyberpunk neon
- hacker imagery
- movie poster
- lens flare
- crushed featureless black

## Negative constraints

- no text
- no logo
- no UI panels
- no neon
- no robot
- no glowing brain
- no entertainment key art
- no genre props

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

- threshold
- sorting chamber
- narrow bridge
- sealed door
- distant aperture
- dark archive
- split corridor
- hidden mechanism

Action pool:

- choose
- trace
- open
- expose
- wait
- cross
- observe
- confront

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Cinematic monochrome editorial frames using near-black space, charcoal texture, one controlled light path, and small human scale to express consequential uncertainty.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #111719, #D9D1BF, #A36B3E
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- focal relationship reads on a bright page
- light directs the eye
- dark areas retain texture
- tension is intellectual
- genre clichés are absent

Failure signals:

- too dark to read
- looks like a film poster
- generic noir detective scene
- neon technology cliché
- light has no conceptual role
- background is densely cinematic
