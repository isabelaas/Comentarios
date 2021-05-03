const con = require('../config/db');

exports.insert = async(values) => {
    con.insert(values)
}

exports.select = async() => {
    var resultados = await con.select()

    return resultados
}

exports.select_unique = async(id) => {
    var resultados = await con.select_unique(id)

    return resultados
}