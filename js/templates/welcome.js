import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import levelArtist from './levelArtist';

const welcome = createDOMElement`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
`;

const contentReplacerHandler = () => {
  // button.removeEventListener(`click`, contentReplacerHandler);
  contentReplacer(levelArtist);
};

const button = welcome.querySelector(`.main-play`);
button.addEventListener(`click`, contentReplacerHandler);

export default welcome;
