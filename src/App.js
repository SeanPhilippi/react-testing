import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import './App.css';
import * as actions from 'redux/actions';

class App extends PureComponent {
  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post A Comment</Link>
        </li>
        <li>
          <button onClick={this.props.changeAuth}>
            {this.props.auth ? 'Sign Out' : 'Sign In'}
          </button>
        </li>
      </ul>
    )
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' component={CommentList} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
};

export default connect(mapStateToProps, actions)(App);
