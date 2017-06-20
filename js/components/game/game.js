import {initialState} from '../../data/game-data';
import LevelView from './levelArtist-view';

export default class Game {
  constructor(state = initialState) {
    this.state = state;
    this.view = new LevelView(this.state);
  }
}
