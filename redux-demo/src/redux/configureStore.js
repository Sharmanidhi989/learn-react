import { createStore } from 'redux';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  createStore(rootReducer, initialState);
}
