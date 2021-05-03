const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: '1234',
  database: 'estagio'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

exports.insert = async(values) => {
    
    connection.query(`INSERT INTO texto (texto, criado) VALUES ('${values[0]}','${values[1]}')`, (err,rows) => {
        if(err) throw err;
      
        console.log('Dados inseridos no banco de dados:');
      });

}

exports.select = async() => {

      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM texto', function (error, results, fields) {
            if (error) {
                console.log(error)
                //Rejeita a promessa
                reject(error)
            }
            //Conclui a promessa
            resolve(results)
            })
        })

}

exports.select_unique = async(id) => {

    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM texto WHERE id = '${id}'`, function (error, results, fields) {
          if (error) {
              console.log(error)
              //Rejeita a promessa
              reject(error)
          }
          //Conclui a promessa
          resolve(results)
          })
      })

}

