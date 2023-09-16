const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) =>{
    res.send({message:"this is home route"});
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
