import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container, FormControl, Input, InputLabel, OutlinedInput, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import './index.css'
import SendIcon from '@mui/icons-material/Send';
import { useStyles } from './style'; 
import validarot from 'validator'


import Instagram from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Kontakt = () => {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState('')
   const [subjectEmailSender, setSubjextEmailSender] = useState('')
  //  console.log(validarot.isEmail('bajbj@knksf.com'))

  const validatorEmail = validarot.isEmail(subjectEmailSender)

  const [showErrorsEmail, setShowErrorsEmail] = useState(false)
  const [isEmptyTextAre, setIsEmptyTextAre] = useState(false)
    

   const handleSend = async (req, res) => {

      if (validatorEmail === false) {
        setSent(false)
        setShowErrorsEmail(true)
      } 
     if(text.length < 7)  {
          setIsEmptyTextAre(true)
      } 
      else {
        setSent(true)
        try {
            await axios.post('http://localhost:5000', {
                text: text,
                subjectEmailSender: subjectEmailSender
            })
        } catch (error) {
            console.log(error)
        }
      }
   }


   const handleSendMessageButton = (e) => {
     e.preventDefault()
     handleSend()
     console.log(text.length)
   }

  const classes = useStyles()

    return (
      <Container>
        <div className='bodyContainer'>
            <div className='mainTitle'>
        <h1>SEND ME A MESSAGE</h1>
            </div>
            <div className='mainTitle'>
               Write your message and leave your email address. I will answer you as soon as possible.
            </div>
            {/* onSubmit={handleSend} */}
        <div className='mainForm'>
        {!sent ? 
        <Container>
         <form className='containerFrom' >
             <FormControl >
             <div >
             <TextField
            type='text' 
            style={{marginBottom: '20px'}}
            value={subjectEmailSender} 
            onChange={e => setSubjextEmailSender(e.target.value)} 
            className={classes.root}
            variant="outlined"
            label='Enter Your Email Adress*'
            InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
            }}
            InputProps={{
                className: classes.multilineColor
              }}
                />

                {showErrorsEmail ? <div style={{color: 'red'}}>
                        <p>Unvalid email</p>
                </div> : <div>
                  
                  </div>}

      </div>
        </FormControl>
        
        <FormControl>
         <TextareaAutosize 
         placeholder='Write your message'
          minRows={3} id='senderMessage' 
          className='inputForm texArea' 
          type='text' 
          value={text} 
          onChange={e => setText(e.target.value)} 
          />
         </FormControl>
         {isEmptyTextAre === true ? <div style={{color: 'red'}}>
            <p>Message must contain at least 7 characters including spaces</p>
         </div> : null
         }
         <button onClick={handleSendMessageButton} className='buttonSubmitEmail' type='submit'><div className='buttonText'>Send Email</div> <SendIcon style={{color: '#fff'}}/></button>
     </form>
     </Container>
         : 
         <Container>
             <div className='emailSended '>
            <h1>Thanks! Your message has been sent successfuly</h1>
            </div>
            </Container>
        }

 
        </div>
      <div className='messagers'>
          <div className='messagersTittle'> Messagers</div>
           
    <div className='IconWraper'>
    <a className='instIcon messageIcon' target="_blank" href="https://www.instagram.com/fotoshershen/"><Instagram/> </a> 
    <a className='textLink' target="_blank" href="https://www.instagram.com/fotoshershen/">@fotoshershen</a> 
    </div>
    <div className='IconWraper'>
      <a className='TelegramIcon messageIcon' target="_blank" href="http://t.me/n_shershen"><TelegramIcon/> </a> 
      <a className='textLink' target="_blank" href="http://t.me/n_shershen">@n_shershen</a> 
    </div>
    <div className='IconWraper'>
      <a className='facebookIcon messageIcon' target="_blank" href="https://www.facebook.com/nadzeya.shershan"><FacebookOutlinedIcon/> 
      </a>  <a className='textLink' target="_blank" href="https://www.facebook.com/nadzeya.shershan">Nadzeya Shershan</a>
    </div>
    <div className='IconWraper'>
    <a  className='WhatsapIcon messageIcon' href='#'><WhatsAppIcon/></a>+48 733 789 108
    </div>

      </div>
        </div>
        </Container>
    )
}
export default Kontakt


