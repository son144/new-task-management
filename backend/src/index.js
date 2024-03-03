// require('dotenv').config({path:"/.env"})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDb from "./db/index.js";
import {app} from './app.js'
import cors from 'cors';

app.use(cors());
// app.use(cors({ credentials: true, origin: true }));
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     optionSuccessStatus:200
//   }));
  
//   app.options('/api/v1/users', cors());
// app.options('*',cors())

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

  

dotenv.config({
    path:"./.env"
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
const jokes=[{id:1,title:"a joke",content:"this is first joke"},
{id:2,title:"a joke",content:"this is second joke"},
{id:3,title:"a joke",content:"this is third joke"},
{id:4,title:"a joke",content:"this is fourth joke"},
{id:5,title:"a joke",content:"this is fifth joke"}]

app.get("/api/jokes",(req,res)=>{
    res.send(jokes)
})
connectDb()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log("hii");
        console.log(`SERVER Is RUNNING AT PORT : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log(`mongo db connection failed ${error}`);
})

// app.use(cors({ credentials: true, origin: true }));


