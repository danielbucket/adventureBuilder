
exports.seed = (knex, Promise) => {
  return knex('primary_contact_data').del()
    .then( () => {
      knex('primary_contact_data').insert([
        { id: 1,
          user_name: 'bucket',
          first_name: 'bucket',
          last_name: 'ludwick',
          street_1: '1223 Miners Alley',
          street_2: '',
          apartment: '',
          city: 'golden',
          state: 'co',
          zip: 80401,
          email: 'danieljbucket@gmail.com',
          phone_number: '1234567890'
        }
    ])
  })
};
