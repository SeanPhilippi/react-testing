import commentsReducer from 'redux/reducers/comments';
import { SAVE_COMMENT } from 'redux/actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment',
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New comment']);
});

it('handles action with unknown type', () => {
    // const newState = commentsReducer([], {});
    const newState = commentsReducer([], { type: 'FSLKEFE' });

    expect(newState).toEqual([]);
});