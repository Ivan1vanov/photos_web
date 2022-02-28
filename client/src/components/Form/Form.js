import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost } from '../../actions/posts';

import './index.css'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } 
  }; 

  if (!user?.result?.name) {
    return null
  }
 
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <form autoComplete="off" noValidate style={{display: 'flex', margin: '15px'}} onSubmit={handleSubmit}>
      <div style={{color: '#fff'}}>
     <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
     </div>
      <Button className='buttonSubmit' variant="contained" color="primary" size="large" type="submit" fullWidth>Add photo</Button>
    </form>
  </div>
  );
};

export default Form;
