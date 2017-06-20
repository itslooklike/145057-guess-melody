import changeView from '../../utils/change-view';
import ResultFalseView from './resultFalse-view';

import resultSuccess from './resultSuccess-init';

const ResultFalse = new ResultFalseView();
ResultFalse.onStart = () => {
  console.log(`ResultFalse`);
  changeView(resultSuccess);
};

export default () => ResultFalse;
