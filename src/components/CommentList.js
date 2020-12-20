import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// convert to Hooks later
class CommentList extends PureComponent {
  renderComments() {
    return this.props.comments.map(comment => {
      console.log('comment', comment)
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   comments: state.comments,
// });

export default connect(state => ({ comments: state.comments }))(CommentList);

