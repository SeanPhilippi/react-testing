import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'redux/actions/types';

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment,
    };
};

export const fetchComments = () => {
    const response = axios('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response,
    };
};

export const changeAuth = () => {
  return {
    type: CHANGE_AUTH,
  };
}