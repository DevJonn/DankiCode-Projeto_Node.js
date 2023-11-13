const express = require('express');
const app = express();

//Aula Criando Rotas iniciais

app.get('/',(req,res)=>{

    res.send ('Carregado página inicial.');

});

app.listen(5000,()=>{
    console.log('server rodando!');
})