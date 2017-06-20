import changeView from '../../utils/change-view';
import LevelArtistView from './levelArtist-view';

import levelGenre from './levelGenre-init';

const levelArtist = new LevelArtistView();
levelArtist.onStart = (evt) => {
  console.log(`levelArtist`);
  if (evt.target.tagName === `INPUT`) {
    changeView(levelGenre);
  }
};

export default () => levelArtist;
