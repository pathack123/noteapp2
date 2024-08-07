const express = require('express');
const app = express();
const mongoose = require("mongoose")
const Note = require('./models/Note')
const bodyParser =  require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://pathack12345:soulpat1234@cluster0.42w6o.mongodb.net/").then(function(){  
    app.get('/',function(req,res){
        res.json({message:"API ทำงานได้ปกติ"})
    })
    
    const noteRouter = require('./routes/Note');
    app.use('/notes',noteRouter)
    

});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server กำลังใช้Port: " + PORT + "อยู่นะ");
});