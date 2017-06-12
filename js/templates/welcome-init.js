import contentReplacer from '../modules/contentReplacer';
import WelcomeView from './welcome-view';

import levelArtist from '../templates/levelArtist-init';

const welcome = new WelcomeView();
welcome.onStart = () => {
  contentReplacer(levelArtist().element);
};

export default () => welcome;
