// script.js
const textSection = document.querySelector('.text-section');

window.addEventListener('scroll', () => {
// Get the current scroll position
const scrollY = window.scrollY;
const sectionHeight = textSection.offsetHeight;

// Define a threshold for keeping the text clear (e.g., 1.5 times the section height)
const threshold = sectionHeight * 1.5; // Adjust this value to increase the area
const blurStart = threshold; // Where the blurring begins
const blurEnd = threshold + sectionHeight; // Where the blurring is complete

// Determine if the text section is in the viewport
if (scrollY < blurStart && scrollY >= 0) {
// As the user scrolls down, calculate how much to unblur
const percentageScrolled = Math.min(scrollY / sectionHeight, 1); // Limit to 1
textSection.style.setProperty('--blur-value', `${20 - (20 * percentageScrolled)}px`);
textSection.style.setProperty('--opacity-value', `${0.2 + (0.8 * percentageScrolled)}`);
} else if (scrollY >= blurStart && scrollY < blurEnd) {
// Gradually increase the blur and decrease opacity as we continue scrolling
const percentageBlurred = (scrollY - blurStart) / sectionHeight; // Calculate percentage for blurring
textSection.style.setProperty('--blur-value', `${20 * percentageBlurred}px`);
textSection.style.setProperty('--opacity-value', `${1 - percentageBlurred}`);
} else {
// If scrolled past the end of the blur area, apply full blur
textSection.style.setProperty('--blur-value', '20px');
textSection.style.setProperty('--opacity-value', '0.2');
}
});