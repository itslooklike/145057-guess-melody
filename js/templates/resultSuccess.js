import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import welcome from './welcome';

const resultSuccess = createDOMElement`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`;

const contentReplacerHandler = () => {
  // button.removeEventListener(`click`, contentReplacerHandler);
  contentReplacer(welcome);
};

const button = resultSuccess.querySelector(`.main-replay`);
button.addEventListener(`click`, contentReplacerHandler);

export default resultSuccess;
