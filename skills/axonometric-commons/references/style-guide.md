# Axonometric Commons style guide

## Visual DNA

Precise axonometric editorial environments where several human activities occupy distinct zones connected by shared routes, tools, and infrastructure.

- Aspect ratio: 16:9 horizontal
- Canvas: pale neutral field with one open-sided spatial system, generous exterior margin, and no UI or map frame
- Rendering language: clean axonometric geometry, simplified credible adults, restrained material blocks, consistent scale, and thin functional routes
- Minimum whitespace: 24%
- Maximum subject coverage: 72%
- Typography: Use at most six supplied one- or two-word zone labels outside the space; no room schedule, legend, or fake signage.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Palette 1 | `#31579A` | primary structure and focal subject |
| Palette 2 | `#77A394` | supporting contrast and secondary forms |
| Palette 3 | `#D2A453` | accent for emphasis and directional cues |
| Palette 4 | `#E8E4DC` | restrained supporting accent |

## Must

- activities occupy clear zones
- shared route connects them
- human scale is consistent
- one system relationship dominates
- space remains inhabitable

## Never

- generic isometric city
- SaaS onboarding graphic
- tiny icon people
- floor-plan presentation
- floating UI labels
- architectural real-estate render

## Negative constraints

- no logo
- no pseudo-text
- no impossible perspective
- no decorative rooms
- no cartoon avatars
- no dashboard cards

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

- shared workshop
- service commons
- learning floor
- coordination hub
- resource spine
- public platform
- connected studios
- distributed workspace

Action pool:

- share
- circulate
- coordinate
- handoff
- gather
- distribute
- support
- adapt

Anti-repetition:

- Change both the main object and the spatial arrangement between illustrations.
- Do not repeat the same composition pattern consecutively.
- Derive metaphors from the current article rather than a stock visual library.

## Prompt scaffold

```text
Generate one standalone 16:9 horizontal editorial illustration.

Visual style: Precise axonometric editorial environments where several human activities occupy distinct zones connected by shared routes, tools, and infrastructure.
Article theme: <theme>
Core idea: <one relationship>
Structure: <composition pattern>
Composition: <framing, hierarchy, reading direction>
Elements: <only essential subjects and objects>
Labels: <verbatim supplied labels or none>
Palette: #31579A, #77A394, #D2A453, #E8E4DC
Constraints: <must, never, and article-specific avoid list>
```

## QA checklist

- axonometric projection is consistent
- activities are distinct
- routes reveal the system
- people remain readable
- space avoids generic isometric style

Failure signals:

- looks like stock isometric art
- scale changes
- too many rooms
- routes are decorative
- human actions are generic
