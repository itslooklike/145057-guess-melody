import View from '../view';

import title from '../components/tittle';
import data from '../data/game-data';

export default class WelcomeView extends View {
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
