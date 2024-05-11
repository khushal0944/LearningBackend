require('dotenv').config();

const express = require('express');
const app = express();

const port = 3000;
const login = true;

async function apifetch(username){
    const url=`https://api.github.com/users/${username}`;
    const response = await fetch(url)
    const data = await response.json();
    return data;
};


app.get('/',(req,res)=>{
    res.send("HelloWorld");
})

app.get('/login',(req,res)=>{
    if(login) res.send("<center><h1>You Are Logged In</h1></center>");
    else res.send("<h1>Please Login First</h1>");
})

app.get('/github',async (req,res)=>{
    const username = "";
    const data = await apifetch(username);
    if(!(data.message === "Not Found")) res.send(data);
    else res.send(`Error Getting api from this ${username}` )
})

app.listen(process.env.PORT,()=>{
    console.log(`running on port ${port}`);
})