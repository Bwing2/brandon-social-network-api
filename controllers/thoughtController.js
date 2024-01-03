const { Thought } = require('../models');

module.exports = {
  // Finds all thoughts and returns them as json.
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Finds one thought based off the ID.
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });

      // Need this as a check if no document was found with that ID.
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
