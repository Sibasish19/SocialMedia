const express = require('express');
const router = express.Router();

const { protect } = require('../controllers/auth');
const {
	createMyProfile,
	doIHaveProfile,
	getMyProfile,
	updateMyProfile,
	deleteMyProfile,
} = require('../controllers/profiles');

router.route('/').post(protect, createMyProfile);

router
	.route('/me')
	.get(protect, doIHaveProfile, getMyProfile)
	.patch(protect, doIHaveProfile, updateMyProfile)
	.delete(protect, doIHaveProfile, deleteMyProfile);

module.exports = router;
