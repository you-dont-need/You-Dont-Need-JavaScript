# 🌤️ Animated Weather Widget - Pure CSS

A beautiful, fully animated weather widget created entirely with **HTML and CSS** - no JavaScript required!

## ✨ Features

- **🌞 Sunny Mode**: Animated sun with rotating rays and pulsing effect
- **☁️ Cloudy Mode**: Floating clouds with smooth animations
- **🌧️ Rainy Mode**: Realistic falling rain with gradient effects
- **❄️ Snowy Mode**: Gently falling snowflakes with rotation
- **🌙 Night Mode**: Moon with twinkling stars
- **📱 Fully Responsive**: Works perfectly on all devices
- **🎨 Smooth Transitions**: Beautiful color transitions between weather states
- **🚫 Zero JavaScript**: Pure CSS animations and `:checked` pseudo-class magic!

## 🎯 How It Works

This widget uses CSS-only techniques to create interactive weather animations:

1. **Radio Button States**: Uses `:checked` pseudo-class to switch between weather conditions
2. **CSS Animations**: Keyframe animations for sun rays, clouds, rain, snow, and stars
3. **CSS Variables**: Easy theming and color management
4. **Gradient Backgrounds**: Dynamic sky backgrounds that change with weather
5. **Transform & Opacity**: Smooth element transitions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced animations, transitions, and effects
  - Keyframe animations
  - Pseudo-classes (`:checked`, `:hover`, `::before`, `::after`)
  - CSS Variables (Custom Properties)
  - Flexbox & Grid layouts
  - Backdrop filters
  - Transform & transition properties

## 📂 File Structure

```
Animated-Weather-Widget/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
└── README.md           # Documentation
```

## 🚀 How to Use

1. **Clone or Download** the files
2. **Open** `index.html` in any modern browser
3. **Click** on the weather condition buttons to see different animations
4. **Enjoy** the smooth CSS animations!

## 🎨 Customization

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --sunny-sky: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --cloudy-sky: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    --rainy-sky: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
    --snowy-sky: linear-gradient(135deg, #d7e1ec 0%, #ffffff 100%);
    --night-sky: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
}
```

### Adjust Animation Speed

Modify animation durations:

```css
/* Clouds - change 20s to your preferred speed */
animation: floatCloud1 20s linear infinite;

/* Rain - change 1s to your preferred speed */
animation: fall 1s linear infinite;

/* Snow - change 4s to your preferred speed */
animation: snowfall 4s linear infinite;
```

### Add More Weather Conditions

1. Add a new radio button in HTML:
```html
<input type="radio" name="weather" id="stormy">
<label for="stormy">⛈️ Stormy</label>
```

2. Add corresponding CSS styling:
```css
#stormy:checked ~ .weather-widget .sky {
    background: var(--stormy-sky);
}
```

## 📱 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ⚠️ Internet Explorer (Limited support)

## 🎓 Learning Points

This project demonstrates:

- **State Management with CSS**: Using `:checked` pseudo-class for interactivity
- **Advanced CSS Animations**: Creating complex weather effects
- **CSS Architecture**: Organizing styles with comments and sections
- **Responsive Design**: Mobile-first approach
- **Performance**: Using CSS transforms for smooth animations

## 🤝 Contributing

Contributions are welcome! Ideas for improvement:

- Add more weather conditions (foggy, windy, stormy)
- Create day/night cycle animation
- Add weather forecast cards
- Include temperature conversion toggle
- Add accessibility improvements (ARIA labels, keyboard navigation)

## 📄 License

This project is open source and available under the [MIT License](../LICENSE).

## 👨‍💻 Author

**Dinil Hansara**
- GitHub: [@dinilH](https://github.com/dinilH)
- LinkedIn: [dinilhansara](https://www.linkedin.com/in/dinilhansara)

## 🙏 Acknowledgments

- Inspired by modern weather apps
- Created for the "You Don't Need JavaScript" project
- Part of Hacktoberfest 2025 contributions

## 📸 Screenshots

### Sunny Mode
![Sunny Weather](screenshots/sunny.png)

### Rainy Mode
![Rainy Weather](screenshots/rainy.png)

### Night Mode
![Night Weather](screenshots/night.png)

---

**Made with ❤️ and Pure CSS** | #Hacktoberfest2025 | #YouDontNeedJavaScript
