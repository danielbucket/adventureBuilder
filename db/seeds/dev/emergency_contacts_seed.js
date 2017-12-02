exports.seed = function(knex, Promise) {
	return knex('emergency_contacts').del()
	.then( () => {
	knex('emergency_contacts').insert([
	{  id: 1,
       first_name: 'rachel',
       last_name: 'moline',
       relation: 'sister',
       street_1: '123 Rhode Road',
       street_2: '',
       apartment: '4b',
       city: 'Eugene',
       state: 'OR',
       zip: '12345',
       email: 'ewe_moline@gmail.com',
       phone_number: '7192858997',
       user_id: '1'
     }
])
})
}