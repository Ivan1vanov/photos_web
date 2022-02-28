import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import './index.css'
import './index.css'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts).reverse();

  return (
    !posts.length ? <Grid className='galeryList' ><CircularProgress /></Grid> : (
      <Grid className='galeryList' >
        {posts.map((post) => (
         <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          // <Grid key={post._id} item xs={12} sm={6} md={6}>
          //   <Post  post={post} setCurrentId={setCurrentId} />
          // </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;