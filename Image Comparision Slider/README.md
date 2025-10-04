# Pure CSS Image Comparison Slider

A beautiful, interactive image comparison slider built with **pure CSS** using the `resize` property. No JavaScript required!

## 🎯 Features

- **100% Pure CSS** - No JavaScript whatsoever
- **Draggable Interface** - Uses CSS `resize` property for true drag functionality
- **Modern UI Design** - Beautiful gradient backgrounds and glassmorphism effects
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Accessibility Support** - Keyboard navigation and reduced motion support
- **Cross-browser Compatible** - Including Safari workarounds

## 🔧 How It Works

The magic happens with these CSS techniques:

1. **CSS `resize` Property** - Makes the container horizontally resizable
2. **CSS Custom Properties** - For dynamic positioning and theming
3. **Filter Effects** - Uses `filter: grayscale(1)` to create the comparison effect
4. **Clever Positioning** - Overlay technique to reveal/hide image portions

## 🎨 Visual Features

- **Elegant Drag Handle** - Circular handle with drag indicator
- **Smooth Animations** - Hover effects and focus states
- **Beautiful Labels** - Floating labels with gradient backgrounds
- **Glow Effects** - Subtle shadows and glowing borders
- **Modern Typography** - Inter font for clean, professional look

## 📱 Responsive Design

- **Desktop**: Full-featured experience with large drag handle
- **Tablet**: Optimized spacing and touch-friendly interactions
- **Mobile**: Compact design with adjusted proportions

## ♿ Accessibility

- **Keyboard Navigation** - Tab to focus, see automatic animation
- **Screen Reader Support** - Proper ARIA labels and descriptions
- **Reduced Motion** - Respects `prefers-reduced-motion` settings
- **Focus Indicators** - Clear visual focus states

## 🚀 Usage

1. Open `index.html` in any modern browser
2. **Drag** the blue line to compare images
3. **Click/Tab** to focus for automatic demonstration
4. Works on touch devices too!

## 🎯 Code Structure

```
Image Comparision Slider/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── ss_1.png           # Screenshot 1
├── ss_2.png           # Screenshot 2
└── README.md          # This file
```

## 🌟 Key CSS Techniques

- `resize: horizontal` for draggable functionality
- CSS custom properties for theming
- `backdrop-filter` for glassmorphism effects
- `aspect-ratio` for responsive images
- CSS Grid and Flexbox for layout

## 🎨 Customization

Easy to customize with CSS custom properties:

```css
:root {
    --primary-color: #667eea;
    --splitter-color: #667eea;
    --splitter-size: 0.2rem;
    --expand: 1rem;
}
```

## 🔗 Demo

[View Live Demo](index.html)

---

**Built with ❤️ using pure CSS • No JavaScript required**