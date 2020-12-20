import { saveComment } from 'redux/actions';
import { SAVE_COMMENT } from 'redux/actions/types';
im

describe('saveComment', () => {
  it('has the correct type', () => {
    // saving the action returned from the action creator to var action
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('New Comment');

    expect(action.payload).toEqual('New Comment');
  });
});
