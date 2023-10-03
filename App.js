import React from 'react';
import {comments} from './commentData'
import Card from './card'
function App(){
  return (
  <div>
  {
    comments.app(comment =>
    <Card commentObject = {comment}/>
    )
  }
  </div>
  );
}

export default App;
