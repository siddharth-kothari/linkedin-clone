import React, { useEffect, useState } from 'react'
import './Feed.css';
import Post from "./Post";
import InputOption from './InputOption';
// import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { db } from './firebase';
import firebase from 'firebase/compat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import { Avatar } from '@mui/material';



function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot =>  (
      setPosts(snapshot.docs.map(doc => (
        {
          id:  doc.id,
          data:  doc.data()
        }
      )))
    ))
  }, [])

  const sendPost  = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input, 
      photoUrl: user.photoURL || user.email[0],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };


  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        
        <div className="feed__input">
         <Avatar src={user.photoURL} /> 
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post'/>
            <button onClick={sendPost}  type='submit'>Post</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
          <InputOption Icon={YouTubeIcon} title='Video' color="#E7A33E"/>
          <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
          <InputOption Icon={AssignmentIcon} title='Write article' color="#7FC15E"/>
        </div>
      </div>
      <FlipMove>
      {posts.map(({id, data:{name, description, message, photoUrl} })  => (
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed;