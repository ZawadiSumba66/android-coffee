import { combineReducers } from 'redux';
import categoryDataReducer from './slices/categories.slice';

const rootReducer = combineReducers({
  data: categoryDataReducer,
});

export default rootReducer;
