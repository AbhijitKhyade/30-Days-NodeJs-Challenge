const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome to expressjs framework</h1>`)
});

app.get('/signup', (req, res)=>{
    res.send(`<h1>Welcome to signup page</h1>`)
});

app.get('/dashboard', (req, res)=>{
    res.send(`<h1>Welcome to Dashboard!</h1>`)
});

app.get('/user/products', (req, res)=>{
    res.send(`<h1>Welcome to user products page </h1>`)
});

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

