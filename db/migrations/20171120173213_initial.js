
exports.up = (knex, Promise) => {
  return Promise.all([

  	knex.schema.createTable('primary_contact_data', table => {
  		table.increments('id').primary()
  		table.string('user_name')
  		table.string('first_name')
  		table.string('last_name')
  		table.string('street_1')
  		table.string('street_2')
  		table.string('apartment')
  		table.string('city')
  		table.string('state')
  		table.integer('zip')
  		table.string('email')
  		table.integer('phone_number')

  		table.timestamps(true, true)
  	}),

    knex.schema.createTable('emergency_contacts', table => {
      table.increments('id').primary()
      table.string('first_name')
      table.string('last_name')
      table.string('relation')
      table.string('street_1')
      table.string('street_2')
      table.string('apartment')
      table.string('city')
      table.string('state')
      table.integer('zip')
      table.string('email')
      table.integer('phone_number')
      table.integer('primary_id').unsigned()
      table.foreign('primary_id').references('primary_contact_data.id')

      table.timestamps(true, true)
    }),

    knex.schema.createTable('adventure_data', table => {
      table.increments('id').primary()
      table.string('name')
      table.date('start_date')
      table.string('start_location')
      table.string('end_location')
      table.integer('primary_id').unsigned()
      table.foreign('primary_id').references('primary_contact_data.id')      

      table.timestamps(true, true)
    })
 	])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('adventure_data'),
    knex.schema.dropTable('emergency_contacts'),
  	knex.schema.dropTable('primary_contact_data')
 	])
};
