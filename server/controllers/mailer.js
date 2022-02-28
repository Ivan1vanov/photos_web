import express from 'express';
import nodemailer from 'nodemailer'

    export const sendEmail = async (req, res) => {
        const {text, subjectEmailSender} = req.body
  
            const mailOptoons = {
              from: 'tommasdervens@gmail.com',
              to: 'tommasdervens@gmail.com',
              subject: subjectEmailSender,
              text: text
            }
        
            const transport = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: process.env.MAIL_FROM,
                  pass: process.env.PASS_FROM
              }
            })
            await transport.sendMail(mailOptoons)
          }

       
  

