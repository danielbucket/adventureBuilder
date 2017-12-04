const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

app.set('port', process.env.PORT || 1111);

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.get('/adventure_data', (req,res) => {
	db('adventure_data').select('*')
	.then(data => res.status(200).json({ data }))
	.catch(err => res.status(500).json({ err }))
})

app.get('/primary_contact_data', (req,res) => {
	db('primary_contact_data').select('*')
	.then(data => res.status(200).json({ data }))
	.catch(err => res.status(500).json({ err }))
})

app.get('/emergency_contacts', (req,res) => {
	db('emergency_contacts').select('*')
	.then(data => res.status(200).json({ data }))
	.catch(err => res.status(500).json({ err }))
})

app.post('/primary_contact_data', (req,res) => {
	db('primary_contact_data')
	.insert({
		
	})
})

app.listen(app.get('port'), () => {
	console.log(`Adventure Builder is listening on port ${app.get('port')}`)
})

module.exports = app;