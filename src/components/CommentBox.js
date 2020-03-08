import React, { Component } from 'react';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        this.setState({ comment: event.targt.value });
    };

handleSubmit = event => {
    event.preventDefault();

    // TODO call an action creator
    // and save the comment
    this.setState({ comment: '' });
};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
};

export default CommentBox;