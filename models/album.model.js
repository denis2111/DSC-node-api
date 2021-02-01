const { Schema, model } = require("mongoose");

const AlbumSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
    },
    artists: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

module.exports = {
  AlbumModel: new model("albums", AlbumSchema),
};