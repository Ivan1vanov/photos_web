import express from 'express'
import cors from 'cors';
import { sendEmail } from '../controllers/mailer.js'

const router = express.Router()

router.post('/', sendEmail)

export default router;