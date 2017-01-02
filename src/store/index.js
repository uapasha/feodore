import { createStore } from 'redux'
const CHANGE_LANG = 'CHANGE_LANG';

function changeLang(lang) {
  return {
    type: CHANGE_LANG,
    lang
  }
}

const initialState = {
  lang: 'en',
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return Object.assign(...state, ...{ lang: action.lang });
    default:
      return state
  }
}

const store = createStore(appReducer);

export default store;
