import View from '../view';

import data from '../data/game-data';
import title from '../components/tittle';

export default class ResultFalseView extends View {
  getStats(stats) {
    return `За&nbsp;${stats.time}&nbsp;минуты<br>вы&nbsp;отгадали ${stats.melodyCount}&nbsp;мелодии`;
  }

  winRateString(rate) {
    return `Это&nbsp;лучше чем у&nbsp;${rate}%&nbsp;игроков`;
  }

  get template() {
    return (`
      <section class="main main--result">
        ${title()}
        <h2 class="title">${data.pages.resultSuccess.title}</h2>
        <div class="main-stat">${this.getStats(data.pages.resultSuccess.stats)}</div>
        <span class="main-comparison">${this.winRateString(data.pages.resultSuccess.winRate)}</span>
        <span role="button" tabindex="0" class="main-replay">${data.pages.resultSuccess.btnText}</span>
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
