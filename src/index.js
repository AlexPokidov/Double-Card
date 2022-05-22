import {
  createElementPageGame,
  createElCard,
  createTabloGame,
  settingSizeGameSpace,
} from './view-app';

import {
  controlGame,
  settingTimer,
} from './game-logic';

import validation from './validation';

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style/normalize.css';
import './style/style.css';

createElementPageGame();

function control() {
  settingTimer();
  validation();
  const btnStart = document.querySelector('.cont-start__btn');
  const input = document.querySelector('.cont-start__input');
  const timer = document.querySelector('.set-timer');
  const btnQuest = document.querySelector('.btn-questions');
  let valueShirtCard = null;
  let valueDifficult = null;

  document.querySelectorAll('.slider-img').forEach((el) => {
    el.addEventListener('click', () => {
      if (document.querySelector('.slider-img_active')) {
        document.querySelector('.slider-img_active').classList.remove('slider-img_active');
      }
      el.classList.add('slider-img_active');
      valueShirtCard = el.dataset.num;
    });
  });

  document.querySelectorAll('.btn-bonus').forEach((el) => {
    el.addEventListener('click', () => {
      if (document.querySelector('.btn-level_active')) {
        switch (document.querySelector('.btn-level_active').textContent) {
          case 'Легенда':
            return;
          case 'Профессионал':
            document.querySelectorAll('.btn-bonus').forEach((el) => {
              el.classList.remove('btn-bonus_active');
            });
            // if (document.querySelectorAll('.btn-bonus_active').length === 1) {
            //   if (!el.classList.contains('btn-bonus_active')) {
            //     return;
            //   }
            // }
        }
      }
      el.classList.toggle('btn-bonus_active');
    });
  });

  document.querySelectorAll('.btn-level').forEach((el) => {
    el.addEventListener('click', () => {
      input.classList.remove('unvalid-error');
      document.querySelector('.bonus-click').disabled = false;
      if (document.querySelector('.btn-level_active')) {
        document.querySelector('.btn-level_active').classList.remove('btn-level_active');

        if (valueDifficult === el) {
          document.querySelector('.bonus-click').disabled = true;
          valueDifficult = null;
          return;
        }
      }

      if (el.textContent === 'Легенда') {
        document.querySelectorAll('.btn-bonus').forEach((i) => {
          i.disabled = true;
        });
      } else {
        document.querySelectorAll('.btn-bonus').forEach((i) => {
          i.disabled = false;
        });
      }

      if (el.textContent !== 'Новичок') {
        document.querySelectorAll('.btn-bonus').forEach((i) => {
          i.classList.remove('btn-bonus_active');
        });
      }

      el.classList.add('btn-level_active');
      valueDifficult = el;
    });
  });

  btnStart.addEventListener('click', () => {
    const value = Number(input.value);
    const time = Number(timer.textContent);
    const textValid = document.querySelector('.valid_text-error');
    const arrayBonus = [];

    /* Проверка валидности */
    if (!value) {
      input.classList.add('unvalid-error');
      textValid.textContent = '';
      textValid.textContent = 'Пожалуйста, введите кол-во карточек, чтобы начать игру.';
    }

    if (valueDifficult && value < 16) {
      if (valueDifficult.textContent === 'Легенда') {
        input.classList.add('unvalid-error');
        textValid.textContent = '';
        textValid.textContent = `Кол-во карточек должно быть не больше 40, и не меньше 10. Если вы играете в режиме "Легенда" от 16.`;
      }
    }

    if (input.classList.contains('unvalid-error')) {
      document.querySelector('.valid_root-cont-modal').classList.add('modal_active');

      setTimeout(() => {
        document.querySelector('.valid_root-cont-modal').classList.remove('modal_active');
      }, 8000);

      return;
    }

    if (document.querySelector('.btn-bonus_active')) {
      document.querySelectorAll('.btn-bonus_active').forEach((el) => {
        el.classList.remove('btn-bonus_active');
        el.classList.add('game-bonus');
        el.disabled = true;
        arrayBonus.push(el);
      });
    }

    if (valueDifficult) {
      valueDifficult.classList.add('level-value');
    }

    createElCard(value, valueShirtCard);
    createTabloGame(time, valueDifficult, value, arrayBonus);
    controlGame(time, value, arrayBonus);

    document.querySelectorAll('.btn-bonus').forEach((el) => {
      el.disabled = false;
    });

    settingSizeGameSpace(value);

    const modal = document.querySelector('.root-cont-modal');

    document.querySelector('.btn-pause').addEventListener('click', () => {
      modal.classList.add('modal_active');

      const valueTime = document.querySelector('.timer-count').textContent;
      const valueClick = document.querySelector('.click-count').textContent;
      const valueCard = document.querySelector('.open-cart').textContent;

      document.querySelector('.time-value-stat').textContent = (time - parseInt(valueTime)) + ` сек`;
      document.querySelector('.click-value-stat').textContent = valueClick;
      document.querySelector('.cart-value-stat').textContent = valueCard;
    });

    document.querySelector('.btn-over-game').addEventListener('click', () => {
      document.body.innerHTML = '';

      createElementPageGame();

      control();
      initSlider();
    });
  });

  btnQuest.addEventListener('click', () => {
    const modal = document.querySelector('.qu_root-cont-modal');

    modal.classList.add('modal_active');
  });

  document.querySelector('.qu_btn-close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.qu_root-cont-modal');

    modal.classList.remove('modal_active');
  });

  document.querySelector('.qu_root-cont-modal').addEventListener('click', (i) => {
    if (!i.target.classList.contains('qu_root-cont-modal')) {
      return;
    }

    const modal = document.querySelector('.qu_root-cont-modal');

    modal.classList.remove('modal_active');
  });

  document.querySelector('.valid_btn-close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.valid_root-cont-modal');

    modal.classList.remove('modal_active');
  });

  document.querySelector('.valid_root-cont-modal').addEventListener('click', (i) => {
    if (!i.target.classList.contains('valid_root-cont-modal')) {
      return;
    }

    const modal = document.querySelector('.valid_root-cont-modal');

    modal.classList.remove('modal_active');
  });
}

control();
initSlider();

function initSlider() {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    slidesPerView: 3,
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 1,
      },

      510: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
}


