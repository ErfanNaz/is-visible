import { createAddClassObserver } from './add-observer';
import { createRemoveClassObserver } from './remove-observer';

globalThis.addEventListener(
  'load',
  () => {
    createAddClassObserver();
    createRemoveClassObserver();
  },
  false
);
