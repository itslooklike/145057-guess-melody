import contentReplacer from '../modules/contentReplacer';
import ResultSuccessView from './resultSuccess-view';

import welcome from './welcome-init';

const resultSuccess = new ResultSuccessView();
resultSuccess.onStart = () => {
  console.log(`resultSuccess`);
  contentReplacer(welcome().element);
};

export default () => resultSuccess;
