# Bauhaus Signals style guide

## Visual DNA

Bold geometric editorial abstraction that expresses one relationship through large circles, arches, bars, planes, counterweights, and disciplined negative space.

- Aspect ratio: 16:9 horizontal
- Canvas: warm off-white or one quiet flat field with subtle print grain; composition should feel intentionally placed on a page rather than edge-to-edge decoration
- Rendering language: hard-edged vector geometry, occasional rough print registration, flat color, and strong scale contrast with no illustrative outlines
- Minimum whitespace: 31%
- Maximum subject coverage: 64%
- Typography: No words, letters, numerals, logos, or pseudo-type. Meaning must come from spatial relationships.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#173C78` | primary structure and focal subject |
| Palette 2 | `#F05A3C` | supporting contrast and secondary forms |
| Palette 3 | `#F2C94C` | accent for emphasis and directional cues |
| Palette 4 | `#F4EFE5` | restrained supporting accent |

## Must

- one spatial verb such as balance, resist, pass, split, or converge
- three to seven major shapes only
- one dominant scale relationship
- limited palette with one accent
- clear visual rhythm
- meaningful empty space

## Never

- random shape soup
- decorative Memphis pattern
- generic gradient blobs
- mandala symmetry
- 3D glass forms
- literal people or objects
- wallpaper repetition
- logo-like centered mark

## Negative constraints

- no text
- no icons
- no photorealism
- no tiny confetti
- no rainbow palette
- no glossy 3D
- no arbitrary symmetry
- no decorative border

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

- circle
- arch
- bar
- threshold
- counterweight
- channel
- wedge
- field
- hinge
- stacked plane

Action pool:

- balance
- interrupt
- converge
- expand
- compress
- pass through
- orbit
- separate
- support
- tilt

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Bold geometric editorial abstraction that expresses one relationship through large circles, arches, bars, planes, counterweights, and disciplined negative space.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #173C78, #F05A3C, #F2C94C, #F4EFE5
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- relationship reads without a caption
- shape count remains disciplined
- negative space is active
- palette has hierarchy
- composition avoids logo territory
- series can vary without losing its grammar

Failure signals:

- pretty but meaningless
- too many small shapes
- looks like a background pattern
- weak scale contrast
- accidental logo
- muddy color hierarchy
