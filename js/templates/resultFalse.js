import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import title from '../components/tittle';
import welcome from './welcome';
import data from '../data/data';

const resultFalse = createDOMElement(`
  <section class="main main--result">
    ${title()}
    <h2 class="title">${data.pages.resultFalse.title}</h2>
    <div class="main-stat">${data.pages.resultFalse.stat}</div>
    <span role="button" tabindex="0" class="main-replay">${data.pages.resultFalse.btnText}</span>
  </section>
`);

const contentReplacerHandler = () => {
  contentReplacer(welcome);
};

const button = resultFalse.querySelector(`.main-replay`);
button.addEventListener(`click`, contentReplacerHandler);

export default resultFalse;
