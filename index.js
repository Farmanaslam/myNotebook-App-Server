const connectToMongo=require("./db");
const express=require("express")
var cors=require('cors')
connectToMongo()

const app=express()
const port =5000

app.use(cors())
//  app.get("/",(req,res)=>{
//      res.send("hello farman");
//   })

app.use(express.json())
//available routes
 app.use('/api/auth',require('./routes/auth'))
 app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
  console.log(`myNotebook backend listening at http://localhost:${port}`);
})