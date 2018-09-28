const express= require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'client/build')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client/build/index.html'))
});

app.listen(8081,(req,res)=>{
    console.log("running on port 8081....")
})
