import express from "express"
// import cors from "cors"
import cookieParser from "cookie-parser"
// import router from "./routes/user.routes.js"
// import taskRouter from "./routes/task.routes.js"
// import cors from "cors

const app=express()
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     credentials:true
// }))
app.use(express.json({limit:"16kb"}))
 app.use(express.urlencoded({extended:true,limit:"16kb"}))
 app.use(express.static("public"))
 app.use(cookieParser())
//  app.use(cors({ credentials: true, origin: true }));


 // routes import

 import router from "./routes/user.routes.js"

//  routes declaration 
app.use("/api/v1/users",router)

import taskRouter from "./routes/task.routes.js"
app.use("/api/v1/tasks",taskRouter)


export {app}

