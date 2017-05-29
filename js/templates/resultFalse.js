import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import welcome from './welcome';

const resultFalse = createDOMElement(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const contentReplacerHandler = () => {
  contentReplacer(welcome);
};

const button = resultFalse.querySelector(`.main-replay`);
button.addEventListener(`click`, contentReplacerHandler);

export default resultFalse;