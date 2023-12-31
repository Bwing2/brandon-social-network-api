// Imports Schema and model functions from mongoose
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// New schema for thoughtsSchema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested/subdocuments documents from reactionSchema in Reaction.js.
    reactions: [Reaction],
  },
  {
    toJSON: {
      // Virtuals are properties not stored in MongoDB, used for computed properties.
      // Virtuals aren't included in JSON by default so have to set to true.
      virtuals: true,
    },
    id: false,
  }
);

// Virtual that retrieves length of specific user reactions array
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initializes thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
