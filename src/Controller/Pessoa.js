import { openDb } from '../configDB.js';


export  async function createTable(){
    openDb() .then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

//INSERI UMA PESSOA
export  async function insertPessoa(Pessoa){
    openDb() .then(db =>{
        db.run('INSERT INTO Pessoa (nome, idade) VALUES(?,?)', [Pessoa.nome, Pessoa.idade] );
    });
}

export  async function updatePessoa(Pessoa){
    openDb() .then(db =>{
        db.run('UPDATE Pessoa SET nome=?, idade=?  WHERE id=? ', [Pessoa.nome, Pessoa.idade, Pessoa.id] );
    });
}

export async function selectPessoas(){
        return openDb().then(db=>{
        return db.all('SELECT *FROM Pessoa')
        .then(res=>res)
    });
}

export async function selectPessoa(id){
    return openDb().then(db=>{
    return db.get('SELECT *FROM Pessoa WHERE id=?',[id])
    .then(res=>res)
  });
}


export async function deletePessoa(id){
    return openDb().then(db=>{
    return db.get('DELETE FROM Pessoa WHERE id=?',[id])
    .then(res=>res)
  });
}
