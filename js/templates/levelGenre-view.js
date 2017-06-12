import View from '../view';

import {getRandomValuesFromArray} from '../modules/helpers';
import data from '../data/game-data';

export default class LevelGenreView extends View {
  levelGenreAnswer(item) {
    const {value} = item;

    return `
    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-${value}" id="a-${value}">
      <label class="genre-answer-check" for="a-${value}"></label>
    </div>
  `;
  }

  getAnswers(answers) {
    const answersAmount = 4;
    const randomAnswers = getRandomValuesFromArray(answers, answersAmount);
    let resultString = ``;

    randomAnswers.forEach((item) => {
      resultString += this.levelGenreAnswer(item);
    });

    return resultString;
  }

  get template() {
    return (`
      <section class="main main--level main--level-genre">
        <h2 class="title">${data.pages.levelGenre.title}</h2>
        <form class="genre">
          ${this.getAnswers(data.pages.levelGenre.answers)}
          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </section>
    `.trim());
  }

  static setButtonDisabled(elem) {
    elem.setAttribute(`disabled`, `disabled`);
  }

  bind() {
    const button = this.element.querySelector(`.genre-answer-send`);
    button.addEventListener(`click`, this.onStart);
    LevelGenreView.setButtonDisabled(button);

    const formGenre = this.element.querySelector(`.genre`);
    formGenre.addEventListener(`change`, this.onCheckChange.bind(this, formGenre, button));
  }

  onStart() {

  }

  onCheckChange() {

  }
}
