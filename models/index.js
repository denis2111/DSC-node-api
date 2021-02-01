const UserModel = require("./user.model");
const ArtistModel = require("./artists.model");
const AlbumModel = require("./album.model");

module.exports = {
  UserModel: UserModel.UserModel,
  ArtistModel: ArtistModel.ArtistModel,
  AlbumModel: AlbumModel.AlbumModel,
};