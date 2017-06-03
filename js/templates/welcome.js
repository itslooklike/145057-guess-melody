import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import levelArtist from './levelArtist';
import title from '../components/tittle';
import data from '../data/data';

const welcome = createDOMElement(`
  <section class="main main--welcome">
    ${title()}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">${data.pages.welcome.title}</h2>
    <p class="text main-text">${data.pages.welcome.subtitle}</p>
  </section>
`);

const contentReplacerHandler = () => {
  contentReplacer(levelArtist);
};

const button = welcome.querySelector(`.main-play`);
button.addEventListener(`click`, contentReplacerHandler);

export default welcome;
