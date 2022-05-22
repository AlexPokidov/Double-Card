let valueTimer = null;
let timer = null;
export function controlGame(time, valueCard, bonus) {
  const gameCont = document.querySelector('.cont-game__space');
  let timerStatus = false;
  valueTimer = parseInt(time);

  const limitClick = parseInt(document.querySelector('.limit-touch').textContent);

  const countClick = document.querySelector('.click-count');

  const openCart = document.querySelector('.open-cart');
  gameCont.addEventListener('click', (e) => {
    let array = document.querySelectorAll('.card-active');

    if (array.length === 2) {
      return;
    }

    if (e.target.classList.contains('cont-game__space') || e.target.classList.contains('card__value') || e.target.classList.contains('card-finish') || e.target.classList.contains('card-active')) {
      return;
    }

    if (e.target.classList.length === 2 && !e.target.classList.contains('card')) {
      return;
    }

    if (!timerStatus) {
      timer = timerControl();
      timerStatus = true;
    }

    if (bonus && countClick.textContent == 0) {
      bonus.forEach((el) => {
        el.disabled = false;
      });
    }

    countClick.textContent = parseInt(countClick.textContent) + 1 + ' т';

    if (parseInt(countClick.textContent) === limitClick) {
      finishGame();
    }

    e.target.classList.add('card-active');
    array = document.querySelectorAll('.card-active');
    setTimeout(()=> {
      e.target.querySelector('.card__value').classList.add('card__value-active');
    }, 150);


    if (array.length === 2) {
      array.forEach(el => {
        setTimeout(() => {
          el.classList.remove('card-active');
          el.querySelector('.card__value').classList.remove('card__value-active');
        }, 400);
      });
      if (array[0].dataset.index === array[1].dataset.index) {
        setTimeout(()=> {
          array[0].classList.add('card-finish');
          array[1].classList.add('card-finish');

          if (array[0].classList.contains('card-finish')) {
            array[0].classList.remove('card-bonus-help');
            array[1].classList.remove('card-bonus-help');
          }

          openCart.textContent = parseInt(openCart.textContent) + 2 + ` о/к`;

          if (document.querySelectorAll('.card-finish').length == valueCard) {
            finishModal('Победа', 'win');
            clearInterval(timer);
          }
        }, 150);
        return;
      };
      return;
    };
  });

  if (bonus) {
    bonus.forEach((el) => {
      el.addEventListener('click', () => {
        switch (el.id) {
          case 'bonus-timer':
            const valueTimer = document.querySelector('.timer-count').textContent;
            document.querySelector('.timer-count').textContent = (parseInt(valueTimer) + 10) + ' c';
            el.disabled = true;
            break;
          case 'bonus-click':
            const valueClick = document.querySelector('.limit-touch').textContent;

            if (valueClick === 'Без ограничений') {
              el.disabled = true;
              return
            };

            document.querySelector('.limit-touch').textContent = (parseInt(valueClick) + 4) + ` л/к`;
            el.disabled = true;
            break;
          case 'bonus-helpOpen':
            const arrayCloseCard = [];
            document.querySelectorAll('.card').forEach((el) => {
              if (!el.classList.contains('card-finish')) {
                arrayCloseCard.push(el);
              }
            });
            const random = Math.floor(Math.random() * arrayCloseCard.length);
            const ElOpen = arrayCloseCard[random].dataset.index;
            arrayCloseCard.forEach((el) => {
              if (el.dataset.index === ElOpen) {
                el.classList.add('card-bonus-help');
              }
            });
            el.disabled = true;
        }
      })
    });
  }

  document.querySelector('.btn-pause').addEventListener('click', () => {
    clearInterval(timer);
  });

  document.querySelector('.btn-close-modal').addEventListener('click', () => {
    document.querySelector('.root-cont-modal').classList.remove('modal_active');

    if (parseInt(document.querySelector('.click-count').textContent) == 0) {
      return;
    }

    if (document.querySelector('.timer-count').textContent != 0 && document.querySelectorAll('.card-finish').length != valueCard) {
      timer = timerControl();
    }
  });

  document.querySelector('.root-cont-modal').addEventListener('click', (event) => {
    if (!event.target.classList.contains('root-cont-modal')) {
      return;
    }
    document.querySelector('.root-cont-modal').classList.remove('modal_active');

    if (parseInt(document.querySelector('.click-count').textContent) == 0) {
      return;
    }



    if (document.querySelector('.timer-count').textContent != 0 && document.querySelectorAll('.card-finish').length != valueCard) {
      timer = timerControl();
    }
  });
}

export function settingTimer() {
  const btnMin = document.querySelector('#btnMin');
  const btnPlus = document.querySelector('#btnPlus');
  const timer = document.querySelector('.set-timer');

  btnMin.addEventListener('click', () => {
    const timerValue = Number(timer.textContent);
    if (timerValue !== 30) {
      timer.textContent = timerValue - 30;
    }
  });

  btnPlus.addEventListener('click', () => {
    const timerValue = Number(timer.textContent);
    if (timerValue !== 300) {
      timer.textContent = timerValue + 30;
    }
  });
}

function timerControl() {
  const timer = document.querySelector('.timer-count');

  const timerFunc = setInterval(() => {
    if (parseInt(timer.textContent) == 0) {
      clearInterval(timerFunc);
      finishGame();
    } else {
      timer.textContent = (parseInt(timer.textContent) - 1) + ' с';
    }
  }, 1000);

  return timerFunc;
}

function finishGame() {
  document.querySelectorAll('.card').forEach((el) => {
    if (!el.classList.contains('card-finish')) {
      el.classList.add('card-finish_luse');
    }
  });
  finishModal('Поражение', 'luse');
  clearInterval(timer);
}

function finishModal(result, resultStatus) {
  const modal = document.querySelector('.root-cont-modal');
  const resultGame = document.querySelector('.result-game');
  const valueTime = document.querySelector('.timer-count').textContent;
  const valueClick = document.querySelector('.click-count').textContent;
  const valueCard = document.querySelector('.open-cart').textContent;

  modal.classList.add('modal_active');

  if (resultStatus === 'luse') {
    modal.querySelector('.cont-modal').classList.add('result-luse');
  } else {
    modal.querySelector('.cont-modal').classList.add('result-win');
  }

  resultGame.textContent = result;

  document.querySelector('.time-value-stat').textContent = (valueTimer - parseInt(valueTime)) + ' сек';
  document.querySelector('.click-value-stat').textContent = valueClick;
  document.querySelector('.cart-value-stat').textContent = valueCard;
}
