# Infinite Slider with Hover Stop Feature

## Overview

This Infinite Slider is a flexible and visually appealing component that smoothly displays a collection of images. Leveraging CSS for animations, this slider allows for infinite scrolling of image items either horizontally from left to right or with the ability to set it to reverse mode. It includes a hover feature that pauses the animation to give users the ability to view images without interruption.

## Features

- **Infinite Scrolling**: The slider continuously moves the images, creating an infinite loop effect.
- **Responsive Design**: Adapts to various screen sizes by using relative units like `min`, `vw`, and custom CSS variables.
- **Hover Stop**: When hovering over the slider, the animation pauses, allowing users to focus on specific images.
- **Customizable Dimensions**: Adjust the width, height, and quantity of images to suit different requirements.

## HTML Structure

The slider's HTML is structured as follows:

- Each slider comprises a `div` with the class `slider`.
- Inside it, there is a `div` with the class `list` that holds multiple `div` elements with the class `item`. Each item contains an `img` tag to display the corresponding image.
  
The sliders accept inline styles for customization through CSS variables:

- `--width`: Defines the width of each item.
- `--height`: Defines the height of each item.
- `--quantity`: Determines the total number of items in the slider.

### Example

```html
<div class="slider" style="
    --width: 200px;
    --height: 200px;
    --quantity: 9;
">
    <div class="list">
        <div class="item" style="--position: 1"><img src="image1.jpg" alt=""></div>
        <div class="item" style="--position: 2"><img src="image2.jpg" alt=""></div>
        ...
    </div>
</div>
```

## CSS Styling

The CSS file (`styles.css`) styles the slider component and includes responsive design elements and animation.

### Key CSS Features

- **Body**: Sets a black background and removes default margins.
- **Main Container**: Limits the maximum width of the main container while centering it.
- **Slider Class**: Sets the height, overflow behavior, and style for the masking effect to focus on the images.
- **List**: Uses flexbox to arrange the items in a linear sequence and allows for minimum width calculation based on the quantity and custom width.
- **Items Animation**: The item animations (using keyframes) define the entry and exit of items, creating the infinite sliding effect.

### Keyframes

- `autoRun`: Moves the images from right to left.
- `reversePlay`: Moves the images from left to right when the `reverse` attribute is set.

### Interaction Effects

- **Hover Effect**: When the user hovers over the slider, the animation pauses, and the images turn grayscale, enhancing focus on the hovered image.

## Usage

To implement the infinite slider on your webpage:

1. Copy the HTML structure for the sliders where required in your body.
2. Customize the inline styles to set the desired dimensions and quantity of images.
3. Add the CSS to your stylesheet to apply the necessary styles and animations.

### Example Implementation in HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Infinite Slider</title>
</head>
<body>
    <main>
        <div class="slider" style="--width: 100px; --height: 50px; --quantity: 10;">
            <div class="list">
                <div class="item" style="--position: 1"><img src="https://link-to-your-image.jpg" alt=""></div>
                ...
            </div>
        </div>
    </main>
</body>
</html>
```

## Conclusion

This Infinite Slider component enriches your website's user interface, providing a dynamic way to showcase images or other content. With minimal configuration, you can easily integrate it into your projects. Adjust the dimensions and styles as needed to match your design requirements.
