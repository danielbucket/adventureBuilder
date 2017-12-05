const db = require('../knex.js');

const GET_primary_contact_data = (req,res) => {
	db('primary_contact_data').select('*')
	.then(data => res.status(200).json({ data }))
	.catch(err => res.status(500).json({ err }))
};


module.exports = {
	GET_primary_contact_data
}