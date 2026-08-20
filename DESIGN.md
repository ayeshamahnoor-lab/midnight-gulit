---
name: Midnight Gilt
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#d0cecd'
  on-tertiary: '#313030'
  tertiary-container: '#b5b2b2'
  on-tertiary-container: '#464545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-display:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
---

## Brand & Style

The brand identity centers on exclusivity, culinary mastery, and the intimate atmosphere of high-end evening dining. It targets a discerning clientele seeking a sensory-rich experience that balances traditional luxury with contemporary precision. 

The design style is **Moody Minimalism**. It leverages high-contrast visuals—deep, dark surfaces punctuated by sharp, golden accents—to create a "low-light" digital environment that mirrors a candlelit steakhouse. The aesthetic is sophisticated and theatrical, utilizing generous whitespace (or "darkspace") to allow high-resolution food photography to act as the primary visual anchor. The emotional response should be one of quiet confidence, indulgence, and impeccable taste.

## Colors

The palette is anchored in a dark-mode-first philosophy to evoke a nighttime atmosphere. 

- **Primary (Gold):** #D4AF37 is used sparingly for interactive elements, accents, and brand markers to signify premium quality.
- **Surface & Background:** A hierarchy of blacks is used to create depth. The base background is **Midnight Black (#0A0A0A)**, while elevated containers and cards use **Deep Charcoal (#1A1A1A)**.
- **Typography & Details:** Content is rendered in **Off-White (#F5F5F5)** to maintain high legibility without the harshness of pure white against a dark background. 
- **Subtle Accents:** Border colors for non-interactive elements should use a low-opacity gold or a muted grey-brown to maintain the warm, metallic theme.

## Typography

Typography plays a critical role in establishing the "Fine Dining" hierarchy. 

**Playfair Display** is the voice of the brand, used for menu categories, section titles, and hero messaging. It should be typeset with tight tracking in display sizes to feel editorial and high-fashion.

**Montserrat** provides a functional, modern counterpoint. It is used for descriptions, ingredient lists, and UI labels. For labels and buttons, Montserrat should be set in uppercase with increased letter spacing to enhance the premium, systematic feel of the interface.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** for desktop to maintain an editorial, magazine-like feel, and a fluid-width approach for mobile. 

- **Grid:** Use a 12-column grid on desktop with generous 24px gutters. 
- **Rhythm:** Vertical spacing is intentionally large (128px between major sections) to emphasize exclusivity and prevent the interface from feeling cluttered.
- **Responsiveness:** On mobile devices, side margins should reduce to 20px, and section gaps should compress to 64px. Content should reflow into a single column, with photography taking full-bleed priority where possible.

## Elevation & Depth

Elevation is achieved through a combination of **Tonal Layering** and **Ambient Shadows**. 

Instead of traditional drop shadows, this design system uses soft, large-radius glows that carry a hint of the primary gold color to simulate the reflection of warm light on dark wood or stone. 
- **Base Level:** Midnight Black (#0A0A0A).
- **Surface Level (Cards/Modals):** Deep Charcoal (#1A1A1A).
- **Shadows:** Use `box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 5px 15px rgba(212, 175, 55, 0.05)`. This subtle "gold-tinted" shadow provides a warm lift to elevated elements.
- **Interactions:** Hover states on cards should slightly increase the intensity of the gold-tinted shadow rather than moving the element's position.

## Shapes

The shape language is **Refined and Rounded**. While the brand is serious, the use of rounded corners (0.5rem base) prevents the design from feeling aggressive or overly corporate. 

- **Buttons & Chips:** Use `rounded-lg` (1rem) to create a soft, approachable interactive area. 
- **Cards & Images:** Use the standard 0.5rem radius to maintain a clean, architectural structure.
- **Dividers:** Use thin, 1px lines. For a premium touch, use a linear gradient for dividers that fades from transparent to #D4AF37 (at 30% opacity) back to transparent.

## Components

### Buttons
- **Primary:** Gold background (#D4AF37) with black text. High-gloss finish or subtle gradient.
- **Secondary:** Transparent background with a 1px Gold border. Text in Gold.
- **Tertiary:** Text-only, uppercase Montserrat with a 2px underline on hover.

### Cards
Cards should have the Deep Charcoal (#1A1A1A) background. For featured menu items, cards may include a thin 1px gold border to signify "Chef's Recommendations." Images within cards should have a subtle desaturated overlay that clears on hover.

### Inputs & Selection
- **Input Fields:** Bottom-border only (1px Gold) to mimic elegant stationery. Background should be a slightly lighter charcoal than the base.
- **Checkboxes/Radios:** Custom styled in Gold. Radio buttons should use a concentric circle "target" style rather than a solid fill.

### Lists
Menu lists should utilize the Playfair Display for the item name and price, with Montserrat for the description. Use a "dotted leader" (dot fill) between the item name and the price to evoke traditional high-end menu design.

### Special Components
- **The Reservation Bar:** A persistent, minimal footer or header element with a gold "Book a Table" call-to-action.
- **Wine Pairing Labels:** Small, pill-shaped chips with a deep burgundy or gold border used alongside menu items.