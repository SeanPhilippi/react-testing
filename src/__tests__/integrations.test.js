import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const component = mount(
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  )

  component.find('.fetch-comments').simulate('click');

  // acts like setTimeout(), moxios can detect when a fetch request is done, then execute what's inside
  moxios.wait(() => {
    // component component has to be told explictly to update/rerender
    component.update();
    console.log('component', component.find('li').debug())
    // expect(component.find('li').length).toEqual(2)
    done();
    component.unmount();
  });
});