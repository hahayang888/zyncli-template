# Sculpted Characters style guide

## Visual DNA

Warm narrative 3D illustration with stylized adult figures, matte sculpted surfaces, controlled proportions, expressive whole-body gestures, and one clear human interaction.

- Aspect ratio: 16:9 horizontal
- Canvas: a simplified tactile environment made from a coherent clay, paper-pulp, or soft-painted material family, grounded by calm studio light and generous breathing room
- Rendering language: high-quality stylized 3D sculpture, adult proportions with modest simplification, matte microtexture, soft bevels, restrained facial features, and readable contact shadows
- Minimum whitespace: 24%
- Maximum subject coverage: 72%
- Typography: No labels, UI, symbols, numbers, logos, clothing marks, or headline.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#3558B6` | primary structure and focal subject |
| Palette 2 | `#E06D54` | supporting contrast and secondary forms |
| Palette 3 | `#E8C780` | accent for emphasis and directional cues |
| Palette 4 | `#D8E0D7` | restrained supporting accent |

## Must

- adult rather than toy proportions
- one decisive interaction
- gesture readable without facial exaggeration
- coherent matte material family
- grounded scene
- editorial composition

## Never

- emoji face
- Funko-like head
- children's animation
- toy advertisement
- avatar pack
- plastic gloss
- floating decorative balls
- brand mascot

## Negative constraints

- no text
- no logo
- no icon
- no UI
- no oversized head
- no childish face
- no glossy plastic
- no toy packaging
- no extra fingers
- no deformed limbs

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

- shared platform
- soft bridge
- modular desk
- hinged wall
- stacked forms
- open vessel
- padded threshold
- tactile rail

Action pool:

- handoff
- support
- assemble
- negotiate
- lift
- balance
- guide
- reconnect

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Warm narrative 3D illustration with stylized adult figures, matte sculpted surfaces, controlled proportions, expressive whole-body gestures, and one clear human interaction.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #3558B6, #E06D54, #E8C780, #D8E0D7
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- characters read as credible stylized adults
- gesture explains the story
- materials remain matte and tactile
- scene has clear ground contact
- composition avoids toy-ad language
- anatomy is clean

Failure signals:

- looks like a children's toy
- generic avatar pack
- gesture is stiff
- glossy plastic dominates
- scene contains decorative clutter
- character anatomy is malformed
