import { createStore } from 'redux'
const CHANGE_LANG = 'CHANGE_LANG';

export function changeLang(lang) {
  return {
    type: CHANGE_LANG,
    lang
  }
}

const initialState = {
  lang: 'en',
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return {...state, ...{ lang: action.lang } };
    default:
      return state
  }
}

const store = createStore(appReducer);

export default store;
