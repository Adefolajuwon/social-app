const { Router } = require('express');
const express = require('express');
const {
	sendMessage,
	getMessage,
	getSchema,
} = require('../controllers/chatController');
const {
	editProfile,
	createProfile,
	getProfile,
} = require('../controllers/profileController');
const router = express.Router();

//Saves new message into database.
router.post('/message', sendMessage);
//Retrieve message from database
router.get('/message', getMessage);
//Get profile
router.get('/profile', getProfile);
//Save new profile
router.post('/profile', createProfile);
//Change profile information
router.put('/profile/:username', editProfile);
module.exports = router;
