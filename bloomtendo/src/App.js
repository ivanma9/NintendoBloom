import './App.css';

import {useState} from 'react';

import InstaPost from './components/InstaPost';

import Users from './components/users/users'

const postInfo = [
  {
    acctName: 'ivanma9',
    buddy: 'squirtle'
  },
  {
    acctName: 'melongirl',
    buddy: 'cherubi'
  }
];

function App() {
  const [likeCount, setLikeCount] = useState(0);

  const incrementLikeCount =() => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="App">
      <Users />
      <button onClick = {incrementLikeCount}> +</button>
      <p> {likeCount}</p>
      {
        postInfo.map(post => {
          return <InstaPost 
            acctName = {post.acctName} 
            buddy = {post.buddy}
          />;
        })
      }
    </div>
  );
}

export default App;
