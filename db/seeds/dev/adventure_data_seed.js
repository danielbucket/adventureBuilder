
exports.seed = function(knex, Promise) {
  return knex('adventure_data').del()
    .then(function () {
      return knex('adventure_data').insert([
        { id: 1,
          name: 'Central America Winter 2018/19',
          start_date: '20181127',
          start_location: 'goldenCO',
          end_location: 'sartenejaBZ',
          primary_id: null,
        }
      ]);
    });
}; 