import createDOMElement from '../modules/createDOMElement';
import contentReplacer from '../modules/contentReplacer';
import levelGenre from './levelGenre';
import data from '../data/data';

const levelArtistAnswer = (item) => {
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
};

const levelArtistCircle = (info) => (`
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
`);

const getSongs = (songs) => {
  let resultString = ``;

  songs.forEach((item) => {
    resultString += levelArtistAnswer(item);
  });

  return resultString;
};

const levelArtist = createDOMElement(`
  <section class="main main--level main--level-artist">
    ${levelArtistCircle(data.time)}
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${data.pages.levelArtist.title}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${getSongs(data.songs)}
      </form>
    </div>
  </section>
`
);

const contentReplacerHandler = (evt) => {
  if (evt.target.tagName === `INPUT`) {
    contentReplacer(levelGenre);
  }
};

const button = levelArtist.querySelector(`.main-list`);
button.addEventListener(`click`, contentReplacerHandler);

export default levelArtist;
