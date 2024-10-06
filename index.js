const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send({message: 'hey buddy'});
});


const PORT = process.env.PORT || 5001;
app.listen(PORT);