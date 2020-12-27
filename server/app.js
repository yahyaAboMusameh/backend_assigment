const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/user/yahya',(req,res)=>{
    res.json({massge: "Welcome"});
})

app.get('/user',(req,res)=>{
    res.json({massge: "Welcome ", name:req.query.name});
})


app.post('/user/yahya',(req,res)=>{
    res.json({ message:req.body.massage ,name:req.body.name });
    
})

app.listen(3000,()=>{
    console.log('server running portNo.3000'); 
 });