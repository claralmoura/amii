const xSlider = document.getElementById('xSlider');
const funcInput = document.getElementById('funcInput');
const submitFunc = document.getElementById('submitFunc');
const dataPoint = document.getElementById('dataPoint');
const output = document.getElementById('output');

const xMinPixel = 60;
const xMaxPixel = 760;
const yMinPixel = 5;
const yMaxPixel = 450;

function updatePointPosition(xValue, yValue) {
  const newX = xMinPixel + (xValue / 10) * (xMaxPixel - xMinPixel);
  const newY = yMaxPixel - (yValue / 10) * (yMaxPixel - yMinPixel);

  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);
}

function processFunction() {
  const funcStr = funcInput.value.trim();
  const regex = /^(-?\d*\.?\d+)?\*?x\s*([\+\-]\s*\d+)?$/;
  
  if (!regex.test(funcStr)) {
    alert(`Função inválida. Insira uma função do tipo "a*x+b".`);
    return;
  }

  const xValue = xSlider.value;
  let yValue;

  try {
    yValue = eval(funcStr.replace(/x/g, `(${xValue})`));
  } catch (error) {
    alert('Erro ao processar a função. Verifique o formato.');
    return;
  }

  if (yValue < 0 || yValue > 10) {
    alert('O valor de Y está fora do intervalo (0 a 10).');
    return;
  }

  updatePointPosition(xValue, yValue);
  output.textContent = `X=${xValue}, Y=${yValue}`;
}

submitFunc.addEventListener('click', processFunction);
updatePointPosition(xSlider.value, 5);
