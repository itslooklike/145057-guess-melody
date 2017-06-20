import changeView from '../../utils/change-view';
import LevelGenreView from './levelGenre-view';

import resultFalse from '../result/resultFalse-init';

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
  changeView(resultFalse);
};

export default () => levelGenre;
