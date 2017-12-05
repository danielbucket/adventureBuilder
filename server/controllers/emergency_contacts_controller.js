const db = require('../knex.js');

const GET_emergency_contacts = (req,res) => {

	db('GET_emergency_contacts').select('*')
	.then(data => res.status(200).json({ data }))
	.catch(err => res.status(500).json({ err }))
};

module.exports = {
	GET_emergency_contacts
}