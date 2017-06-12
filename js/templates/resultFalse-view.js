import View from '../view';

import data from '../data/game-data';
import title from '../components/tittle';

export default class ResultFalseView extends View {
  get template() {
    return (`
      <section class="main main--result">
        ${title()}
        <h2 class="title">${data.pages.resultFalse.title}</h2>
        <div class="main-stat">${data.pages.resultFalse.stat}</div>
        <span role="button" tabindex="0" class="main-replay">${data.pages.resultFalse.btnText}</span>
      </section>
    `.trim());
  }

  bind() {
    const button = this.element.querySelector(`.main-replay`);
    button.addEventListener(`click`, this.onStart);
  }

  onStart() {

  }
}
