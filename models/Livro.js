/* 
Descricao :
	Criação do Livro no Banco de Dados.
Aluno :
	Antônio Carlos Ramos Filho
Data :
	01/08/2021
*/

const mongoose = require('mongoose');

const Livro = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    Autor: {
        type: String,
        require: true
    }
},
{
    timestamps: true,
});

mongoose.model('livro', Livro);
