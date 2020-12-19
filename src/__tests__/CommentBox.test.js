import React from 'react';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('has a text area and two buttons', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

describe('the text area', () => {
  // grouping tests based on similar setup to avoid repetition
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      // pass in string of native html event name
      target: { value: 'new comment' }, // mock event object
    });
    // force React to re-render component, since it is async
    component.update();
  });

  it('has a text area that users can type in', () => {
    // making sure the value prop of textarea is now set to the new comment
    expect(component.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears the textarea upon submit', () => {
    component.find('form').simulate('submit');
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
