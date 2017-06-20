import AbstractView from '../../abstract-view';

import data from '../../data/game-data';
import title from '../common/tittle';

export default class ResultFalseView extends AbstractView {
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
