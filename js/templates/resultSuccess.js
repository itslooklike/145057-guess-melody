import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import title from '../components/tittle';
import welcome from './welcome';
import data from '../data/data';

const getStats = (stats) => (`
  За&nbsp;${stats.time}&nbsp;минуты<br>вы&nbsp;отгадали ${stats.melodyCount}&nbsp;мелодии
`);

const winRateString = (rate) => (`
  Это&nbsp;лучше чем у&nbsp;${rate}%&nbsp;игроков
`);

const resultSuccess = createDOMElement(`
  <section class="main main--result">
    ${title()}
    <h2 class="title">${data.pages.resultSuccess.title}</h2>
    <div class="main-stat">${getStats(data.pages.resultSuccess.stats)}</div>
    <span class="main-comparison">${winRateString(data.pages.resultSuccess.winRate)}</span>
    <span role="button" tabindex="0" class="main-replay">${data.pages.resultSuccess.btnText}</span>
  </section>
`);

const contentReplacerHandler = () => {
  contentReplacer(welcome);
};

const button = resultSuccess.querySelector(`.main-replay`);
button.addEventListener(`click`, contentReplacerHandler);

export default resultSuccess;
