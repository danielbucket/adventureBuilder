const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

app.set('port', process.env.PORT || 1001)

app.use(express.static(__dirname + '../public/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ exrended: true }))

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '../public/index.html'))
})

app.listen(app.get('port'), () => {
	console.log(`Adventure Builder is listening on port ${app.get('port')}`)
})

module.exports = app;