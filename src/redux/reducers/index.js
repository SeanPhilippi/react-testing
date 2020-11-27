import { combineReducers } from 'redux';
import comments from 'redux/reducers/comments.js';
import auth from 'redux/reducers/auth.js';

export default combineReducers({
  comments,
  auth,
});
