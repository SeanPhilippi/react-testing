import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import './App.css';

class App extends PureComponent {
  renderButton = () => {
    if (this.props.auth) {
      return (
        <button>
          Sign Out
        </button>
      )
    } else {
      return (
        <button>
          Sign In
        </button>
      )
    }
  }

  render() {
    return (
      <ul>
        <li>
          <Link to='/' component={CommentBox}>Home</Link>
        </li>
        <li>
          <Link to='/post' component={CommentList}>Post a Comment</Link>
        </li>
        <div>
          {this.renderButton()}
        </div>
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
};

export default connect(mapStateToProps)(App);
