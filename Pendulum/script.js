const speedSlider = document.getElementById('speed-slider');
const speedValue = document.getElementById('speed-value');
const pendulum = document.querySelector('.pendulum');

speedSlider.addEventListener('input', () => {
    const speed = speedSlider.value;
    speedValue.textContent = speed;
    pendulum.style.animationDuration = `${1 / speed}s`;
});
