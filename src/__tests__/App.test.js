import React from 'react';
import Root from 'Root';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let component;
beforeEach(() => {
  component = shallow(
    <Root>
      <App />
    </Root>
    );
});

it('shows a comment box', () => {
  // expect(component.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(component.find(CommentList).length).toEqual(1);
});
