import changeView from '../../utils/change-view';
import ResultSuccessView from './resultSuccess-view';

import welcome from '../welcome/welcome-init';

const resultSuccess = new ResultSuccessView();
resultSuccess.onStart = () => {
  console.log(`resultSuccess`);
  changeView(welcome);
};

export default () => resultSuccess;
