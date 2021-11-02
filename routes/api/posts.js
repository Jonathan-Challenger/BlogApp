const express = require("express");
const auth = require("../../middleware/auth");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../../models/User");
const Profile = require("../../models/Profile");
const Post = require("../../models/Post");

// @route   POST api/posts
// @desc    Create a post
// @access  PRIVATE

router.post(
  "/",
  auth,
  body("title", "Title is required").notEmpty(),
  body("content", "Content is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Get user who made post
      const user = await User.findById(req.user.id).select("-password");

      // Create new Post object
      const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      // Save to DB
      const post = await newPost.save();

      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
