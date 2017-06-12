import contentReplacer from './modules/contentReplacer';
import welcome from './templates/welcome-init';

contentReplacer(welcome().element);
