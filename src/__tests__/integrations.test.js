import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  // trick axios into thinking it got a response
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  )

  wrapped.find('.fetch-comments').simulate('click');
  console.log('wrapped', wrapped.debug())
  expect(wrapped.find('li').length).toEqual(2);

  // acts like setTimeout(), moxios can detect when a fetch request is done, then execute what's inside
  moxios.wait(() => {
    // wrapped component has to be told explictly to update/rerender
    wrapped.update();
    // expect(wrapped.find('li').length).toEqual(2)
    done();
    wrapped.unmount();
  });
});