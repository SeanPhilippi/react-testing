import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <CommentBox />
        <CommentList />
    </div>
  );
}

export default App;
