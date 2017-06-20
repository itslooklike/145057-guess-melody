import changeView from '../../utils/change-view';
import WelcomeView from './welcome-view';
import app from '../../main';

export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    // changeView(this.view);

    this.view.onStart = () => {
      console.log('tararar');
      app.showGame();
    };

    changeView(this.view);
  }
}
