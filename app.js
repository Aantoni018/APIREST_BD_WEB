/* 
Descricao :
	Programa que realiza a conexão com mongodb,
    pegar dados do livro, fazer as alterações,
    updates e delete. 
Aluno :
	Antônio Carlos Ramos Filho
Data :
	01/08/2021
*/

const express = require('express');
const mongoose = requite('mongoose');

require("./models/Livro");
const Livro = mongoose.model('livro');

const app = express();

mongoose.connect('mongodb://localhost/bd_web', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!!");
}).catch((erro) => {
    console.log("Erro -> Conexão com MongoDB não foi realizada com sucesso!!");
});

app.use(express.json());

app.get("/", (req, res) => {
    Livro.find({}).then((livro) => {
        return res.json(livro);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo encontrado!"
        })
    })
});

app.get("/livro/:id", (req, res) => {
    Livro.findOne({id:req.params.id}).then((livro) => {
        return res.json(livro);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum livro encontrado!"
        })
    })

});

app.post("/livro", (req, res) => {
    const livro = Livro.create(req.body,  (errx) => {
        if(errx) return res.status(400).json({
            error: true,
            message: "Error: Livro não cadastrado!"
        })

        return res.status(200).json({
            error: false,
            message: "Livro cadastrado!"
        })
    })
});

app.put("livro/:id", (req, res) => {
    const livro = Livro.updateOne({_id: req.params.id}, req.body, (erro) => {
        if(errx) return res.status(400).json({
            error: true,
            message: "Error: Livro não foi editado."
        });

        return res.json({
            error: false,
            message: "Livro editado."
        });
    });
});

app.delete("/livro/:id", (req, res) => {
    const livro = Livro.deleteOne({_id: req.params.id}, (errx) => {
        if(errx) return res.status(400).json({
            error: true,
            message: "Error: Livro não foi apagado"
        });

        return res.json({
            error: false,
            message: "Livro apagado!"
        })
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});