
exports.seed = (knex, Promise) => {
  return knex('user_contact').del()
    .then( () => {
      return knex('user_contact').insert([
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
        },
      ]);
    });
};
