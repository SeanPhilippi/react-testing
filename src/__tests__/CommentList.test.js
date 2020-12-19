import React from 'react';
import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one <li> per comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  // render() is a method recommended by Enzyme that returns a CheerioWrapper
  // cheerio is a jquery-like library with a .text()
  expect(component.render().text()).toContain('Comment 1');
  expect(component.render().text()).toContain('Comment 2');
});
