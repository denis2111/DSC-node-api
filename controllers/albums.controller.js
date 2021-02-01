const { StatusCodes } = require("http-status-codes");
const { Mongoose, Schema } = require("mongoose");
const { AlbumModel, ArtistModel } = require("../models");

const addAlbum = async (req, res) => {
  try {
    const { name, release_date, artists:artists_id} = req.body;

    const oldAlbum = await AlbumModel.findOne({
      name,
    });

    if (oldAlbum){
      return res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: "An album with this name already exists!",
      })
    }

    var artists = [];
    for (var artistId of artists_id){
      objId = Schema.Types.ObjectId(artistId);
      const artist = await ArtistModel.findOne({
        objId
      });

      if (!artist){
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: `Artist with id ${artistId} does not exist.`,
        })
      }
      artists.push(artist)
    }
 
    await AlbumModel.create({
      name,
      release_date,
      artists: artists_id,
    });

    album = AlbumModel.findOne({name});

    for (var artist of artists){
      artist["albums"].push(album._id);
    }

    return res.status(StatusCodes.CREATED).json({
      success: true,
    })
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something bad happened!",
    });
  }
};

const getAlbums = async (req, res) => {
  try{
    return res.status(StatusCodes.OK).json({
      success: true,
      data: await AlbumModel.find({}),
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something bad happened!",
    });
  }
}

const getAlbumById = async (req, res) => {
  try{
    return res.status(StatusCodes.OK).json({
      success: true,
      data: await AlbumModel.findOne({_id: req.params.id}),
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something bad happened!",
    });
  }
}

module.exports = {
  addAlbum,
  getAlbums,
  getAlbumById,
};