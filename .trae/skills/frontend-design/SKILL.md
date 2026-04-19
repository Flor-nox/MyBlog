---
name: "frontend-design"
description: "Generates creative, polished frontend code that avoids generic AI aesthetics. Creates distinctive, production-grade interfaces with exceptional attention to aesthetic details."
---

# Frontend Design

A skill for creating unique, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.

## Trigger Keywords

- Frontend design, UI design, interface design
- Web design, CSS, HTML, React components
- Landing page, dashboard, form design
- Visual design, aesthetic design

## Core Philosophy: Anti-AI Slop Aesthetics

Every design should have a clear aesthetic point of view, not a generic "AI style".

### Must Avoid

| Anti-pattern | Problem | Alternative |
|-------------|---------|-------------|
| Overused fonts | Arial, Inter, Roboto | JetBrains Mono, Playfair Display, Space Grotesk |
| Cliché colors | #4F46E5 (blue-purple), rainbow gradients | Distinctive palettes: dominant + sharp accents |
| Predictable layouts | 12-column grid, card walls | Asymmetric, unexpected spatial composition |
| Generic animations | Fade in/out, basic hover | Intentional micro-interactions, high-impact moments |
| Flat design | Solid colors, no texture | Atmospheric backgrounds, subtle gradients, depth |

## Design Framework (Design Before Code)

### Four Core Questions

1. **PURPOSE** - What problem does this interface solve? Who is the user? What are their emotional needs?

2. **TONE** - Choose a bold aesthetic direction:
   - Minimalist
   - Maximalist
   - Retro-Futuristic
   - Brutalist
   - Organic/Natural
   - Tech/Cyberpunk
   - Handcrafted

3. **CONSTRAINTS** - Technical limits, brand guidelines, accessibility requirements

4. **DIFFERENTIATION** - What makes this design memorable? What will users remember?

## Five Pillars of Frontend Aesthetics

### 1. Typography

```css
/* Avoid: Overused fonts */
font-family: 'Inter', 'Roboto', 'Arial', sans-serif;

/* Recommended: Distinctive font combinations */
/* Tech feel */
font-family: 'JetBrains Mono', 'Fira Code', monospace;

/* Elegant feel */
font-family: 'Playfair Display', 'Cormorant Garamond', serif;

/* Modern feel */
font-family: 'Space Grotesk', 'DM Sans', sans-serif;
```

- Use 2-3 fonts (display + body + optional accent)
- Clear hierarchy with clamp() for responsive sizing
- Strong weight contrast (400 vs 700+)
- Generous line-height (1.5-1.75 for body)

### 2. Color & Theme

```css
/* Avoid: Generic AI colors */
--primary: #4F46E5;
--gradient: linear-gradient(to right, #667eea, #764ba2);

/* Recommended: Distinctive palettes */
/* Dark tech */
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --text-primary: #fafafa;
  --accent: #22d3ee;
  --accent-glow: rgba(34, 211, 238, 0.3);
}

/* Warm natural */
:root {
  --bg-primary: #faf8f5;
  --bg-secondary: #f0ebe3;
  --text-primary: #2d2a26;
  --accent: #e07a5f;
}
```

### 3. Motion

```css
/* Avoid: Meaningless animations */
transition: all 0.3s ease;

/* Recommended: Intentional motion */
/* Micro-interaction: button hover */
.btn {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn:hover {
  transform: translateY(-2px) scale(1.02);
}

/* Entrance animation */
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### 4. Spatial Composition

```css
/* Avoid: Predictable grid */
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Recommended: Unexpected composition */
/* Asymmetric hero */
.hero {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(2rem, 5vw, 6rem);
  padding: clamp(4rem, 10vh, 12rem) 0;
}

/* Bold negative space */
.feature-section {
  max-width: 60ch;
  margin: 0 auto;
  padding: 20vh 0;
}
```

### 5. Backgrounds & Visual Details

```css
/* Avoid: Solid colors */
background: #ffffff;

/* Recommended: Atmospheric depth */
/* Subtle gradient */
.section {
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
}

/* Glow effect */
.glow-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 20%,
    var(--accent-glow) 0%,
    transparent 50%
  );
  pointer-events: none;
}

/* Glass morphism */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

## Implementation Standards

### Code Quality

- **Production-Grade**: Ready for production without major changes
- **Visually Striking**: Memorable visual impression
- **Cohesive**: Unified aesthetic viewpoint
- **Meticulously Refined**: Polished details, no rough edges

### Complexity Matching

- **Maximalist designs** → Complex animations, layered visuals, rich interactions
- **Minimalist designs** → Precise spacing, perfect typography, restrained motion
- **High performance** → CSS-first, avoid JS animations, optimize critical path

## Self-Checklist

### Design Phase
- [ ] Clear aesthetic direction established
- [ ] Four core questions answered
- [ ] At least one "unexpected" element
- [ ] Distinctive color palette (not AI-generic)

### Implementation Phase
- [ ] Font choices are unique and intentional
- [ ] Motion serves high-impact moments
- [ ] Layout has unexpected spatial composition
- [ ] Background has depth (gradient/texture/glow)
- [ ] Code is production-grade

### Quality Phase
- [ ] Visually impressive
- [ ] All elements cohesive
- [ ] Details meticulously refined
- [ ] Basic accessibility met

## Memory Mnemonic

**Anti-AI Mantra:**
- Reject generic, embrace unique
- Inter is outdated, colors must be distinctive
- Grids can be broken, motion should be restrained
- Deep backgrounds, refined details

**Design Questions:**
- What's the purpose? What's the tone?
- Where are the limits? What's the unique point?

**Five Pillars:**
- Typography with voice, colors with character
- Motion with intent, space with surprise
- Background with depth, details refined
