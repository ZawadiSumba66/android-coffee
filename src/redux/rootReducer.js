import {combineReducers} from 'redux';
import categoryDataReducer from './slices/categories.slice';
import avatarReducer from './slices/avatar.slice';

const rootReducer = combineReducers({
  data: categoryDataReducer,
  avatar: avatarReducer,
});

export default rootReducer;
