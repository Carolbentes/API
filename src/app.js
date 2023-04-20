//import {openDb} from './configDB.js';
import { createTable, insertPessoa, updatePessoa, selectPessoa, selectPessoas, deletePessoa} from './Controller/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();


app.get('/', function(req, res){
    res.send("Api Rodando");
});

app.get('/Pessoas', async function(req, res){
    let Pessoas = await selectPessoas();
    res.json(Pessoas);
});

app.get('/Pessoa', async function(req, res){
    let Pessoa = await selectPessoa(req.body.id);
    res.json(Pessoa);
});

app.post('/pessoa', function(req, res){
     insertPessoa(req.body)
     res.json({
        "statusCode": 200
     })
});

app.put('/pessoa', function(req, res){

    if(req.body && !req.body.id){
    res.json({
        "statusCode": "400",
        "msg": "Você precisa informar um id"
    })
    }else{
    updatePessoa(req.body)
    res.json({
       "statusCode": 200
    })
   }
});

app.delete('/Pessoa', async function(req, res){
    let Pessoa = await deletePessoa(req.body.id);
    res.json(Pessoa);
});




app.listen(3000, ()=> console.log("api rodando."))