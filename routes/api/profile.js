const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  PRIVATE

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('User', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'No profile found for this user' });
        }

        res.json(profile);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;