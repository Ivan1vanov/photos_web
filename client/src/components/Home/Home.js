import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import './index.css'
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
    return (
        <div style={{backgroundColor: '#000'}}>
          
         <div className='morePhoto'><p>Even more photos on my instagram</p>  <a className='instIcon' target="_blank" href="https://www.instagram.com/fotoshershen/"><InstagramIcon/></a> </div>
       
          <div> 
          <div className='openPhotoOnThePhone'>
              PUSH ON THE PHOTO TO OPEN
            </div>
            <Form currentId={currentId} setCurrentId={setCurrentId} /></div>
           <div>
           <Posts setCurrentId={setCurrentId} />
           </div>
           
            
        </div>
    )
}

export default Home