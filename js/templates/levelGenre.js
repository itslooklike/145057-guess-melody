import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import {getRandomTrueFalse} from '../modules/helpers';
import resultSuccess from './resultSuccess';
import resultFalse from './resultFalse';

const levelGenre = createDOMElement`
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`;

const contentReplacerHandler = (evt) => {
  evt.preventDefault();
  // button.removeEventListener(`click`, contentReplacerHandler);

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
