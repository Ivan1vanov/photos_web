import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dtv from 'dotenv'
import bcryptjs from 'bcryptjs'

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import sendEmailRouter from './routes/meiler.js'

const app = express();
dtv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);  
app.use("/sendemail", cors(), sendEmailRouter) 

const PORT = process.env.PORT|| 5000;



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false); 