const { Schema, model } = require("mongoose");

const ArtistSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    birth_date: {
      type: Date,
    },
    albums: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

ArtistSchema.index({first_name: "", last_name: ""}, {unique: true});

module.exports = {
  ArtistModel: new model("artists", ArtistSchema),
};