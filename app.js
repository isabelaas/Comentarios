const text_controller = require('./controllers/text_controller');
const express = require('express')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

const port = 3001


app.get('/', (req, res) => {
  res.render('index.html')
})

app.post('/register_text',jsonParser, text_controller.register_text)
app.get('/get_texts', text_controller.select_all_texts)
app.post('/get_unique_text',jsonParser, text_controller.select_unique_text)

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`)
})

