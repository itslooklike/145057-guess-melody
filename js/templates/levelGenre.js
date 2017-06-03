import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import {getRandomTrueFalse} from '../modules/helpers';
import resultSuccess from './resultSuccess';
import resultFalse from './resultFalse';
import data from '../data/data';

const levelGenreAnswer = (item) => {
  const {value} = item;

  return `
    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-${value}" id="a-${value}">
      <label class="genre-answer-check" for="a-${value}"></label>
    </div>
  `;
};

const getAnswers = (answers) => {
  let string = ``;

  answers.forEach((item)=>{
    string += levelGenreAnswer(item);
  });

  return string;
};

const levelGenre = createDOMElement(`
  <section class="main main--level main--level-genre">
    <h2 class="title">${data.pages.levelGenre.title}</h2>
    <form class="genre">
      ${getAnswers(data.pages.levelGenre.answers)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`);

const contentReplacerHandler = (evt) => {
  evt.preventDefault();

  if (getRandomTrueFalse()) {
    contentReplacer(resultSuccess);
  } else {
    contentReplacer(resultFalse);
  }
};

const checkboxHandler = () => {
  for (let i of formGenre) {
    if (i.type === `checkbox`) {
      if (i.checked === true) {
        button.removeAttribute(`disabled`);
        break;
      } else {
        setButtonDisabled();
      }
    }
  }
};

const button = levelGenre.querySelector(`.genre-answer-send`);
const setButtonDisabled = () => button.setAttribute(`disabled`, `disabled`);
setButtonDisabled();
button.addEventListener(`click`, contentReplacerHandler);

const formGenre = levelGenre.querySelector(`.genre`);
formGenre.addEventListener(`change`, checkboxHandler);

export default levelGenre;
