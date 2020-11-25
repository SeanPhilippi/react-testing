import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
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
