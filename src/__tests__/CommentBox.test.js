import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    // grouping tests based on similar setup to avoid repetition
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { // pass in string of native html event name
            target: { value: 'new comment' } // mock event object
        });
        // force React to re-render component, since it is async
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        // making sure the value prop of textarea is now set to the new comment
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('clears the textarea upon submit', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});