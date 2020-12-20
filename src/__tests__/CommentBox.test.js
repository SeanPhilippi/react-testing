import React from 'react';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  // grouping tests based on similar setup to avoid repetition
  beforeEach(() => {
    // pass in string of native html event name
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }, // mock event object
    });
    // force React to re-render wrapped, since it is async. it doesn't rerender immediately with setState()
    // only use for mounted components
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    // making sure the value prop of textarea is now set to the new comment
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears the textarea upon submit', () => {
    wrapped.find('form').simulate('submit');
    // force rerender
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
