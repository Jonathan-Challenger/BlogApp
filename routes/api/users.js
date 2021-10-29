const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users 
// @desc    Register user
// @access  PUBLIC

router.post('/', [
    // Validation using express validator
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Please enter a password with 6 or more characters').isLength({min:6})
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        // See if user exists already
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ errors: [ { msg: 'User already registered' }] });
        }

        // Get users gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        // Create new user instance
        user = new User({
            name,
            email,
            avatar,
            password
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        // Save new user to db
        await user.save();

        // Return jsonwebtoken


        res.send("User registered");
    } catch(e) {
        console.error(e.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;