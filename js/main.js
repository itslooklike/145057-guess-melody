import Welcome from './components/welcome/welcome-init';
import Game from './components/game/game';
import Result from './components/result/resultFalse-init'; // презентер для статы

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GAME]: Game,
      [ControllerID.RESULT]: Result,
    };

    window.onhashchange = () => {
      console.log(`dddd`);
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller().init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
    console.log(`showGame from App`);
  }

  showResult() {
    location.hash = ControllerID.RESULT;
  }
}

const app = new App();
app.init();
export default app;
