const express = require('express');
const app = express();
const router = require('./routes/routes');

const PORT = process.env.PORT || 8000;

app.use('/api', router);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
