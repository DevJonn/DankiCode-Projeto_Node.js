const express = require('express');

const app = express();

app.get('/',(req,res)=>{

    res.send ('Carregado página inicial.');

});

app.listen(5000,()=>{
    console.log('server rodando!');
})