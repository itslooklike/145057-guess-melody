import AbstractView from '../../abstract-view';

import title from '../common/tittle';
import data from '../../data/game-data';

export default class WelcomeView extends AbstractView {
  get template() {
    return (`
      <section class="main main--welcome">
        ${title()}
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">${data.pages.welcome.title}</h2>
        <p class="text main-text">${data.pages.welcome.subtitle}</p>
      </section>
    `.trim());
  }

  bind() {
    const button = this.element.querySelector(`.main-play`);
    button.addEventListener(`click`, this.onStart);
  }

  onStart() {

  }
}
