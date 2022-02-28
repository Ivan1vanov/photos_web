import React from 'react'
import Navbar from '../Navbar/Navbar'
import signPath from '../../publick/img/sign.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import './index.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className='mainPage'>
         
            <div className='helloNadia'>
                    <div className='whoAmI'>
                        
                        <div className='textInfo'><h1>Hello, I am Nadia!</h1>
                        <div className='descriptionIngo'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis quo facere iusto, inventore delectus? Et maxime commodi ducimus voluptatem magni excepturi? Aperiam eos odit iusto magnam. Vel, natus minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatum quos quae ratione reiciendis! Ut officia error quos rerum maiores harum debitis magni asperiores nemo modi necessitatibus, qui quae alias.</p>
                           
                        </div>
                        <br />
                        <div className='contactComponents'>
                        <img src={signPath} className='signAutor'/>
                        <a style={{textDecoration: 'none', color: '#fff', marginRight: '17px'}} target="_blank" href="https://www.instagram.com/fotoshershen/"><InstagramIcon/></a> 
                        <a style={{textDecoration: 'none', color: '#fff', marginRight: '17px'}} target="_blank" href="http://t.me/n_shershen"><TelegramIcon/></a>
                        <a style={{textDecoration: 'none', color: '#fff', marginRight: '17px'}} target="_blank" href=" https://www.facebook.com/nadzeya.shershan"><FacebookOutlinedIcon/></a>
                        </div>
                        </div>
                
                    </div>

                    <div className='autorPhoto'>
                           

                    </div>

                  
            </div>
         
        </div>
    )
}

export default MainPage
