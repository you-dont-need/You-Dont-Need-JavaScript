# Reduce JavaScript Usage with AOS Library

## Overview

This project demonstrates how to use the **Animate on Scroll (AOS)** library to create animated scroll effects on a webpage with minimal JavaScript. By utilizing this library, you can enhance the visual appeal of your web applications while keeping the codebase clean and efficient.

## Installation

To integrate the AOS library into your project, simply include the following CDN links in your HTML file:

```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init();
</script>
 ```

## Examples  
Once you initialized the AOS you can add "data-aos" classname. Below is the example:
```html
<div data-aos="zoom-out-up"></div>
```

inorder to check the visibility of the animations just reload the page and notice. 
