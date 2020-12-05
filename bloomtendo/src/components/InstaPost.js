import React, {useState} from 'react';
import './InstaPost.css';

function InstaPost(props){

    const [likeCount, setLikeCount] = useState(0);

    const incrementLikeCount =() => {
        setLikeCount(likeCount + 1);
      };

    return <div className = "post">
        <div className = "account-line">
            <strong>{props.acctName}</strong>
        </div>
        <p onClick = {incrementLikeCount}> press buddy name to increase likes :{props.buddy} </p>
        <div> {likeCount} likes</div>
    </div>
}

export default InstaPost;