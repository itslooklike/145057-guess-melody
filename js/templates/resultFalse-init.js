import contentReplacer from '../modules/contentReplacer';
import ResultFalseView from './resultFalse-view';

import resultSuccess from './resultSuccess-init';

const ResultFalse = new ResultFalseView();
ResultFalse.onStart = () => {
  console.log(`ResultFalse`);
  contentReplacer(resultSuccess().element);
};

export default () => ResultFalse;
