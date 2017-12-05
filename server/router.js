const express = require('express');
const router = express();

const primaryContactDataController 	= require('./controllers/primary_contacts_controller');
const adventureDataController 			= require('./controllers/adventure_data_controller');
const emergencyContactsController 	= require('./controllers/emergency_contacts_controller');

router.get('/v1/primary_contact_data', primaryContactDataController.GET_primary_contact_data)
router.get('/v1/adventure_data', adventureDataController.GET_adventure_data)
router.get('/v1/primary_contacts', emergencyContactsController.GET_emergency_contacts)


module.exports = router;