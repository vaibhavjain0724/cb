require('dotenv').config();
const express = require("express");
const app = express();
const askGroq = require('./groq');

const cors = require("cors");
app.use(cors());

app.get("/", async function(req,res){
    const query = req.query.n;
    const result = await askGroq(query + "You are a helpful assistant who sounds natural, silly ,  friendly, dont try to overdo it and dont be robotic. also respond normally dont write 'goin' and stuff" );
    res.send(result);
})

app.listen(3000);