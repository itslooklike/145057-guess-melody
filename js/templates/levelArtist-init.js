import contentReplacer from '../modules/contentReplacer';
import LevelArtistView from './levelArtist-view';

import levelGenre from '../templates/levelGenre-init';

const levelArtist = new LevelArtistView();
levelArtist.onStart = (evt) => {
  console.log(`levelArtist`);
  if (evt.target.tagName === `INPUT`) {
    contentReplacer(levelGenre().element);
  }
};

export default () => levelArtist;
