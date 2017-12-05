const db = require('../knex.js');

const GET_adventure_data = (req,res) => {

	db('adventure_data').select('*')
	.then(data => res.status(200).json({ data }))
	.catch(err => res.status(500).json({ err }))
};

module.exports = {
	GET_adventure_data
}