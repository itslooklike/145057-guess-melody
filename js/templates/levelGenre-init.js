import contentReplacer from '../modules/contentReplacer';
import LevelGenreView from './levelGenre-view';

import resultFalse from '../templates/resultFalse-init';

const levelGenre = new LevelGenreView();

levelGenre.onCheckChange = (form, button) => {
  for (let i of form) {
    if (i.type === `checkbox`) {
      if (i.checked === true) {
        button.removeAttribute(`disabled`);
        break;
      } else {
        LevelGenreView.setButtonDisabled(button);
      }
    }
  }
};

levelGenre.onStart = (evt) => {
  evt.preventDefault();
  console.log(`levelGenre`);
  contentReplacer(resultFalse().element);
};

export default () => levelGenre;
