import { CHANGE_AUTH } from 'redux/actions/types';

export default (state = false, { type, payload }) => {
  switch (type) {
    case CHANGE_AUTH:
      return !state;
    default:
      return state;
  }
}