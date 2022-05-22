import { el, setChildren } from 'redom';

import img1 from './assets/img/card-value-1.png';
import img2 from './assets/img/card-value-2.png';
import img3 from './assets/img/card-value-3.png';
import img4 from './assets/img/card-value-4.png';
import img5 from './assets/img/card-value-5.png';
import img6 from './assets/img/card-value-6.png';
import img7 from './assets/img/card-value-7.png';
import img8 from './assets/img/card-value-8.png';
import img9 from './assets/img/card-value-9.png';
import img10 from './assets/img/card-value-10.png';
import img11 from './assets/img/card-value-11.png';
import img12 from './assets/img/card-value-12.png';
import img13 from './assets/img/card-value-13.png';
import img14 from './assets/img/card-value-14.png';
import img15 from './assets/img/card-value-15.png';
import img16 from './assets/img/card-value-16.png';
import img17 from './assets/img/card-value-17.png';
import img18 from './assets/img/card-value-18.png';
import img19 from './assets/img/card-value-19.png';
import img20 from './assets/img/card-value-20.png';

import imgBack1 from './assets/img/backg-cont-1.jpg';
import imgBack2 from './assets/img/backg-cont-2.jpg';
import imgBack3 from './assets/img/backg-cont-3.jpg';
// import imgBack4 from './assets/img/backg-cont-4.jpg';
import imgBack5 from './assets/img/backg-cont-5.jpg';
import imgBack6 from './assets/img/backg-cont-6.jpg';
import imgBack7 from './assets/img/backg-cont-7.jpg';

import shirt1 from './assets/img/card-shirt-darEl.png';
import shirt2 from './assets/img/card-shirt-eeyLion.png';
import shirt3 from './assets/img/card-shirt-fenix.png';
import shirt4 from './assets/img/card-shirt-fire.png';
import shirt5 from './assets/img/card-shirt-ironBoy.png';
import shirt6 from './assets/img/card-shirt-legion.png';
import shirt7 from './assets/img/card-shirt-selesta.png';
import shirt8 from './assets/img/card-shirt-starCool.png';
import shirt9 from './assets/img/card-shirt-tuzad.png';
import shirt10 from './assets/img/card-shirt-varian.png';

const arrayBackg = [
  imgBack1,
  imgBack2,
  imgBack3,
  imgBack5,
  imgBack6,
  imgBack7,
];

document.body.style.backgroundImage = `url(${arrayBackg[Math.floor(Math.random() * (arrayBackg.length - 1)) + 1]})`;

const arrayLet = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

export function createElementPageGame() {
  const container = el('div', {
    class: 'container',
  });

  const title = el('h1', 'Double Card', {
    class: 'title-app',
  });

  const slider = el('div', {
    class: 'swiper',
  });

  const swiperHtml = `
  <div class="swiper-wrapper">
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt1" src=${shirt1} alt="Лунный цветок">
    <figcaption>Лунный цветок</figcaption>
    </figure>
    </div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt2" src=${shirt2} alt="Танцующий лев">
    <figcaption>Танцующий лев</figcaption>
    </figure>
    </div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt3" src=${shirt3} alt="Феникс">
    <figcaption>Феникс</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt4" src=${shirt4} alt="Повелитель огня">
    <figcaption>Повелитель огня</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt5" src=${shirt5} alt="Железный страж">
    <figcaption>Железный страж</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt6" src=${shirt6} alt="Легион">
    <figcaption>Легион</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt7" src=${shirt7} alt="Селеста">
    <figcaption>Селеста</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt8" src=${shirt8} alt="Ледяная звезда">
    <figcaption>Ледяная звезда</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt9" src=${shirt9} alt="Тьюзад">
    <figcaption>Тьюзад</figcaption>
    </figure></div>
    <div class="swiper-slide">
    <figure class="slider-img-cont">
    <img class="slider-img" data-num="shirt10" src=${shirt10} alt="Вариан">
    <figcaption>Вариан</figcaption>
    </figure></div>
  </div>

  <div class="swiper-button-prev swiper-button"></div>
  <div class="swiper-button-next swiper-button"></div>
  `;

  slider.innerHTML = swiperHtml;

  const sizeViewPort = window.innerWidth;

  let maxCardValue = 40;

  if (sizeViewPort < 1050) {
    maxCardValue = 34;
  }

  const settingEl = el('ul', {
    class: 'list-set',
  }, el('li', {
    class: 'list-set__item',
  }, el('span', `Кол-во карточек (от 10 до ${maxCardValue}):`, {
    class: 'set-text',
  }), el('input', {
    class: 'cont-start__input',
  })), el('li', {
    class: 'list-set__item',
  }, el('span', 'Время игры (от 30с до 300с):', {
    class: 'set-text',
  }), el('button', '-30c', {
    class: 'set-btn',
    id: 'btnMin',
  }), el('span', '60', {
    class: 'set-timer',
  }), el('button', '+30c', {
    class: 'set-btn',
    id: 'btnPlus',
  })), el('li', {
    class: 'list-set__item',
  }, el('span', 'Активируйте бонусы:', {
    class: 'set-text',
  }), el('button', {
    class: 'btn btn-bonus bonus-timer',
    id: 'bonus-timer',
  }), el('button', {
    class: 'btn btn-bonus bonus-click',
    id: 'bonus-click',
    disabled: true,
  }), el('button', {
    class: 'btn btn-bonus bonus-helpOpen',
    id: 'bonus-helpOpen',
  })), el('li', {
    class: 'list-set__item',
  }, el('span', 'Режим сложности:', {
    class: 'set-text',
  }), el('div', {
    class: 'cont-btn-level',
  }, el('button', 'Новичок', {
    class: 'btn btn-level btn-ease-level',
  }), el('button', 'Профессионал', {
    class: 'btn btn-level btn-middle-level',
  }), el('button', 'Легенда', {
    class: 'btn btn-level btn-top-level',
  }))), el('li', {
    class: 'list-set__item',
  }, el('span', 'Выберите рубашку карточек:', {
    class: 'title-slider',
  }), slider), el('li', {
    class: 'list-set__item',
  }, el('button', 'Начать игру', {
    class: 'cont-start__btn',
  })));

  const contStart = el('div', {
    class: 'cont-game',
  }, el('div', {
    class: 'cont-start',
  }, el('span', 'Настройте игру', {
    class: 'cont-start__descr',
  }), el('button', {
    class: 'btn btn-questions',
  }), settingEl));

  setChildren(container, [title, contStart]);
  setChildren(document.body, container);
  createModal();
  createModalQueastionsGame();
  createModalValidError();
}

export function createElCard(x, shirtCard) {
  document.querySelector('.title-app').classList.add('title-app_game');
  const arrayDataNum = [];
  const contSpace = el('div', {
    class: 'cont-game__space',
  });

  if (!shirtCard) {
    shirtCard = 'shirt3';
  }

  const cont = document.querySelector('.cont-game');

  for (let i = 1; i <= x / 2; i++) {
    arrayDataNum.push(i);
    arrayDataNum.push(i);
  }

  setChildren(cont, contSpace);

  for (let i = 1; i <= x; i++) {
    const random = (Math.random() * (arrayDataNum.length - 1)).toFixed(0);
    // if (arrayDataNum.length === 1) {
    //   random = 0;
    // } else {
    //   random = (Math.random() * arrayDataNum.length).toFixed(0);
    // }
    console.log(arrayDataNum);
    const img = el('img', {
      class: 'card__value',
      src: arrayLet[arrayDataNum[random] - 1],
    });
    console.log(random);

    const elem = el('div', {
      class: `card ${shirtCard}`,
      'data-index': arrayDataNum[random],
    }, img);

    contSpace.append(elem);
    arrayDataNum.splice(random, 1);

    console.dir(img);
  }
}

export function createTabloGame(timer, valueDifficult, numCard, bonus = []) {
  let limitClick = null;
  const defDifficult = 6;

  const sizeViewPort = window.innerWidth;

  if (valueDifficult != null) {
    switch (valueDifficult.textContent) {
      case 'Новичок':
        limitClick = Math.floor(numCard * 4.5 - defDifficult);
        break;

      case 'Профессионал':
        limitClick = Math.floor(numCard * 3.5 - defDifficult);
        break;

      case 'Легенда':
        limitClick = Math.floor(numCard * 2.5 - defDifficult);
        break;

      default:
        limitClick = null;
    };
  };

  const contEl = el('div', {
    class: 'game-tablo',
  }, el('ul', {
    class: 'game-tablo__list',
  }, el('li', {
    class: 'game-tablo__item',
  }, el('span', sizeViewPort > 500 ? 'Огран. на ход:' : '', {
    class: 'game-tablo__text',
  }), el('span', limitClick === null ? 'Без огран.' : limitClick + ` л/к`, {
    class: 'limit-touch game-tablo__value',
  })), el('li', {
    class: 'game-tablo__item',
  }, el('span', sizeViewPort > 500 ? 'Тайм.:' : '', {
    class: 'game-tablo__text',
  }), el('span', `${timer} с`, {
    class: 'timer-count game-tablo__value',
  })), el('li', {
    class: 'game-tablo__item',
  }, el('span', sizeViewPort > 500 ? 'Сдел. ход.:' : '', {
    class: 'game-tablo__text',
  }), el('span', '0 т', {
    class: 'click-count game-tablo__value',
  })), el('li', {
    class: 'game-tablo__item',
  }, el('span', sizeViewPort > 500 ? 'Отк. карт:' : '', {
    class: 'game-tablo__text',
  }), el('span', '0 о/к', {
    class: 'open-cart game-tablo__value',
  })), el('li', {
    class: 'game-tablo__item',
  }, el('span', sizeViewPort > 500 ? 'Бон.:' : '', {
    class: 'game-tablo__text',
  }), el('div', bonus.length ? bonus : 'Без бонусов', {
    class: 'game-tablo__value',
  }))), el('button', 'Pause', {
    class: 'btn btn-pause',
  }));

  const level = el('div', valueDifficult === null ? '' : valueDifficult, {
    class: 'cont-level',
  });

  const cont = document.querySelector('.cont-game');

  cont.append(contEl, level);
}

function createModal() {
  const listStat = el('ul', {
    class: 'list-stat',
  }, el('li', {
    class: 'item-stat',
  }, el('span', 'Сыграно времени:', {
    class: 'stat-text',
  }), el('span', {
    class: 'time-value-stat stat-text-value',
  })), el('li', {
    class: 'item-stat',
  }, el('span', 'Кол-во ходов:', {
    class: 'stat-text',
  }), el('span', {
    class: 'click-value-stat stat-text-value',
  })), el('li', {
    class: 'item-stat',
  }, el('span', 'Кол-во карточек:', {
    class: 'stat-text',
  }), el('span', {
    class: 'cart-value-stat stat-text-value',
  })));

  const modal = el('div', {
    class: 'root-cont-modal',
  }, el('div', {
    class: 'cont-modal',
  }, el('h2', 'Pause', {
    class: 'result-game',
  }), el('div', {
    class: 'cont-statistic',
  }, el('span', 'Ваши результаты:', {
    class: 'title-stat',
  }), listStat), el('button', 'Сыграть еще раз', {
    class: 'btn btn-over-game',
  }), el('button', {
    class: 'btn btn-close-modal',
  })));

  document.querySelector('.container').append(modal);
}

function createModalQueastionsGame() {
  const text = el('span', {
    class: 'qu_text',
  });

  text.innerHTML = `
    Правила игры очень просты, перед вами будет поле из закрытых карточек. Ваша задача:
    найти одинаковые карточки. Игра завершается, как только вы откроете все карточки или истечет время.<br>

    Конечно, это не все. Я решил немного разнообразить привычную игру и внес несколько новшеств,
    как визуальных, так и концептуальных.
    <br>
    В Double Card вы сможете:

  `;

  const listParam = el('ul', {
    class: 'qu_list',
  }, el('li', 'Гибко настроить кол-во карточек (Обязательно четное число). Возможный диапазон от 10 до 40 или до 34, взависимости от устройства. В режиме сложности "Легенда" минимальное кол-во карт 16;', {
    class: 'qu_list-item',
  }), el('li', 'Вы сможете настроить время игры с шагом 30с. Возможный диапазон таймера от 30 до 300 сек.;', {
    class: 'qu_list-item',
  }), el('li', 'Выбирайте уровень сложности, от "новичка" до "легенды". Этот параметр определяет ограничение на кол-во открытий карточек. Является необязательным;', {
    class: 'qu_list-item',
  }), el('li', 'Вы сможете активировать и взять в игру 3 разных бонуса (подсказки-помощники). Этот параметр так-же является необязательным. Обратите внимание, использовать сразу 3 бонуса вы сможете в режиме сложности "Новичок" или без выбора сложности. В режиме "Профессионал" можно взять только 1 бонус. В "Легендарном" режиме бонусы использовать запрещено.;', {
    class: 'qu_list-item',
  }), el('li', 'Перед началом игры вы можете выбрать вариант колоды карт. Это необязательный параметр;', {
    class: 'qu_list-item',
  }), el('li', el('button', {
    class: 'btn btn-bonus bonus-timer',
    id: 'bonus-timer',
    disabled: true,
  }), el('span', ' - Увеличивает таймер на 10 секунд;'), {
    class: 'qu_list-item',
  }), el('li', el('button', {
    class: 'btn btn-bonus bonus-click',
    id: 'bonus-click',
    disabled: true,
  }), el('span', ' - Бонус полезен, если вы играете в режиме сложности. Он увеличивает лимит ходов на 4;'), {
    class: 'qu_list-item',
  }), el('li', el('button', {
    class: 'btn btn-bonus bonus-helpOpen',
    id: 'bonus-helpOpen',
    disabled: true,
  }), el('span', ' - Весьма полезный бонус. Подсказывает где находится рандомная пара карточек. Обратите внимание, бонус только подсказывает, открыть карточки должны вы сами. Счет ходов, при этом не останавливается;'), {
    class: 'qu_list-item',
  }));

  const modal = el('div', {
    class: 'qu_root-cont-modal',
  }, el('div', {
    class: 'qu_cont-modal',
  }, el('h2', 'Добро пожаловать в Double Card', {
    class: 'qu_title',
  }), el('div', text, listParam), el('button', {
    class: 'btn qu_btn-close-modal',
  })));

  document.querySelector('.container').append(modal);
}

function createModalValidError() {
  const modal = el('div', {
    class: 'valid_root-cont-modal',
  }, el('div', {
    class: 'valid_cont-modal',
  }, el('h2', 'Внимание, недопустимые параметры:', {
    class: 'valid_title',
  }), el('div', {
    class: 'valid_text-error',
  }), el('button', {
    class: 'btn valid_btn-close-modal',
  })));

  document.querySelector('.container').append(modal);
}

export function settingSizeGameSpace(sumEl) {
  const gameSpace = document.querySelector('.cont-game__space');

  const sizeViewPort = window.innerWidth;

  sumEl = (sumEl <= 12) ? sumEl + 5 : sumEl;

  if (sizeViewPort < 1000) {
    gameSpace.style.width = '100%';
    return;
  }

  gameSpace.style.width = `${((sumEl / 40) * 100)}%`;
}
