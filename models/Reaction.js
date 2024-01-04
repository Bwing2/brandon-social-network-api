// Imports Schema and Types functions from mongoose.
// Types is used when type of fields needs to be defined. Only have to import Types if using Types.ObjectId() specifically, otherwise Schema.Types.ObjectId works with imported model function.
const { Schema, Types } = require('mongoose');

// Schema only (no model) that is used for reference for thoughtsSchema.
const reactionSchema = new Schema(
  {
    reactionId: {
      // Schema.Types is used to define data type.
      type: Schema.Types.ObjectId,
      // Sets default option to return a new ObjectId. Uses Types.ObjectId() since you need to call function to create and return new ObjectId.
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      // Sets default to current date timestamp
      default: Date.now,
    },
  },
  {
    toJSON: {
      // Getters let you format/manipulate data for use
      // Getters also aren't included by default so have to set to true.
      getters: true,
    },
    id: false,
  }
);

reactionSchema.virtual('dateCreatedAt').get(function () {
  return this.createdAt.toLocaleString();
});

module.exports = reactionSchema;
