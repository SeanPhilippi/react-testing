import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    // looks inside the div and checks to see if the CommentBox is in there
    // console.log(div.innerHTML)
    expect(div.innerHTML).toContain('Hi there');
    ReactDOM.unmountComponentAtNode(div);
});
