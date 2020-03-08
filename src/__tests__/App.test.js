import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import CommentBox from '../components/CommentBox';

it('renders without crashing', () => {
    // component
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});
