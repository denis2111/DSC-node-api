const Joi = require("joi-oid");

const auth = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const objectId = Joi.object({
  id: Joi.objectId().required(),
});

const addAlbum = Joi.object({
  name: Joi.string().pattern(new RegExp("[^a-zA-Z0-9_-]|[ ]{3, 30}")).required(),
  release_date: Joi.date(),
  artists: Joi.array().items(Joi.objectId()),
});

const addArtist = Joi.object({
  first_name: Joi.string().alphanum().min(2).max(30).required(),
  last_name: Joi.string().alphanum().min(2).max(30).required(),
  birth_date: Joi.date(),
})

module.exports = {
  auth,
  addAlbum,
  addArtist,
  objectId,
};