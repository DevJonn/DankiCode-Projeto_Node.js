const express = require('express');
const app = express();

//Aula Criando Rotas iniciais 4min

app.engine('html', require('ejs'.renderFile)); 
//setar a engine para renderização do tipo html usando o ejs para renderizar
app.set('view engine', 'html');
//aqui estamos setando a view engine para ser html
app.use('public', express.static(path.join(__dirname, 'public')));
//informar que o diretorio estático onde fica arquivos fotos e css está na pasta public
app.set('views', path.join(__dirname, '/views'));
//informando a pasta views usando a função path.join e função __dirname

app.get('/',(req,res)=>{


});

app.listen(5000,()=>{
    console.log('server rodando!');
})