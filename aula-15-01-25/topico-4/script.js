const xSlider = document.getElementById('xSlider');
const ySlider = document.getElementById('ySlider');
const dataPoint = document.getElementById('dataPoint');

const xMinPixel = 40;
const xMaxPixel = 480;
const yMinPixel = 20;
const yMaxPixel = 250;

function updatePointPosition() {
  const xValue = xSlider.value;
  const newX = xMinPixel + (xValue / 100) * (xMaxPixel - xMinPixel);

  const yValue = ySlider.value;
  const newY = yMaxPixel - (yValue / 150) * (yMaxPixel - yMinPixel);

  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);
}

updatePointPosition();

xSlider.addEventListener('input', updatePointPosition);
ySlider.addEventListener('input', updatePointPosition);
