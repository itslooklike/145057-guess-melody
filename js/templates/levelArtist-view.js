import View from '../view';

import {getRandomValuesFromArray} from '../modules/helpers';
import data from '../data/game-data';

export default class LevelArtistView extends View {

  levelArtistAnswer(item) {
    const {value, imgSrc, name} = item;

    return `
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${value}" name="answer" value="val-${value}" />
      <label class="main-answer" for="answer-${value}">
        <img class="main-answer-preview" src="${imgSrc}">
        ${name}
      </label>
    </div>
  `;
  }

  levelArtistCircle(info) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${info.startMinutes}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">${info.startSeconds}</span>
        </div>
      </svg>
    `.trim();
  }

  getSongs(songs) {
    const answersAmount = 3;
    const randomAnswers = getRandomValuesFromArray(songs, answersAmount);
    let resultString = ``;

    randomAnswers.forEach((item) => {
      resultString += this.levelArtistAnswer(item);
    });

    return resultString;
  }

  get template() {
    return (`
      <section class="main main--level main--level-artist">
        ${this.levelArtistCircle(data.time)}
        <div class="main-wrap">
          <div class="main-timer"></div>
          <h2 class="title main-title">${data.pages.levelArtist.title}</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${this.getSongs(data.songs)}
          </form>
        </div>
      </section>
    `.trim());
  }

  bind() {
    const button = this.element.querySelector(`.main-list`);
    button.addEventListener(`click`, this.onStart);
  }

  onStart() {

  }
}
