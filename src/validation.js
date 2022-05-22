export default function validationStartForm() {
  const inputValueCard = document.querySelector('.cont-start__input');
  const textValid = document.querySelector('.valid_text-error');
  const sizeViewPort = window.innerWidth;
  let statusErr = false;
  let maxValue = 40;
  let valueInput = '';

  if (sizeViewPort < 1050) {
    maxValue = 34;
  }

  inputValueCard.addEventListener('input', (i) => {
    statusErr = false;
    inputValueCard.classList.remove('unvalid-error');

    if (i.inputType === 'deleteContentBackward') {
      valueInput = inputValueCard.value;
    }

    if (String(i.data).match(/[0-9]/)) {
      valueInput += i.data;
      inputValueCard.value = valueInput;
    } else {
      inputValueCard.value = valueInput;
    }
  });

  inputValueCard.addEventListener('blur', () => {
    let statusLegend = false;
    if (document.querySelector('.btn-level_active')) {
      statusLegend = document.querySelector('.btn-level_active').textContent === 'Легенда' ? true : false;
    }

    if (Number(inputValueCard.value) % 2 === 1) {
      inputValueCard.value = Number(inputValueCard.value) + 1;
      valueInput = inputValueCard.value;
    }

    if (inputValueCard.value > maxValue || inputValueCard.value < 10 || (statusLegend && inputValueCard.value < 16)) {
      inputValueCard.classList.add('unvalid-error');
      statusErr = true;
      textValid.textContent = '';
      textValid.textContent = `Кол-во карточек должно быть не больше ${maxValue}, и не меньше 10. Если вы играете в режиме "Легенда" от 16.`;
    }
  });
}
