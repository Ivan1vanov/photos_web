import React, { useState } from 'react';
import { Button } from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import './index.css'
import { deletePost } from '../../../actions/posts';
import './index.css'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(null)
  const user = JSON.parse(localStorage.getItem('profile'));
  const [model, setModel] = useState(false)

  const getImage = (src) => {
      setSelectedImg(src)
      setModel(true)

  }

  
  return (
    <div className='mainBlock' xs={12} sm={4}>
      <div onClick={() => setModel(false)} className={model ? 'model open' : 'model'} >
          <img className='openedImage' alt='' src={selectedImg} />
          
      </div>
   <a className='gallery-item'>
     <div onClick={() => getImage(post.selectedFile)} className='gallery-item-hover'>OPEN</div>
  
    <img className='elementImg' src={post.selectedFile} alt='alt' /><br/>
    </a>
    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )} 
   
    </div>
  );
};

export default Post;



