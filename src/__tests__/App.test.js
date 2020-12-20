import React from 'react';
import Root from 'Root';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
  wrapped = shallow(
    <Root>
      <App />
    </Root>
    );
});

it('shows a comment box', () => {
  // expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  // expect(wrapped.find(CommentList).length).toEqual(1);
});
