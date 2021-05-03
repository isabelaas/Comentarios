const texto_model = require('../models/text_model');

exports.register_text = async(req, res, next) => {
    
    const texto = req.body.texto
    var d = new Date();
    var data_atual = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
    console.log(data_atual)

    
    if(texto != ""){
        var values = []
        values = [texto,data_atual]

        texto_model.insert(values)

        res.send("Inserido com sucesso")
    }
    

    res.send("Seu texto esta vazio.")
//    res.render('index', { title: 'Nao foi possivel encontrar um corpo', text: texto });
}

exports.select_all_texts = async(req,res,next) => {
    var resultado = await texto_model.select()

    res.send(resultado)
}

exports.select_unique_text = async(req,res,next) => {
    var text_id = req.body.id_text;

    if(text_id != ""){
        var resultado = await texto_model.select_unique(text_id)

        res.send(resultado)
    }
    

    
}

