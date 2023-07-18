import { createStore } from 'redux';

import { mainReducer } from './mainReducer';
console.log(mainReducer);

export const store = createStore(mainReducer);
