const { StatusCodes } = require("http-status-codes");
const { ArtistModel } = require("../models");

const addArtist = async (req, res) => {
  try {
    const { first_name, last_name, birth_date} = req.body;
    
    const oldArtist = await ArtistModel.findOne({
      first_name,
      last_name,
    });

    if (oldArtist){
      return res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: "An artist with this name already exists!",
      })
    }

    await ArtistModel.create({
      first_name,
      last_name,
      birth_date,
    });

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

const getArtists = async (req, res) => {
  try{
    if (req.params.id){
      return res.status(StatusCodes.OK).json({
        success: true,
        data: await ArtistModel.find({_id: req.params.id}),
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      data: await ArtistModel.find({}),
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something bad happened!",
    });
  }
}

const getArtistById = async (req, res) => {
  try{
    return res.status(StatusCodes.OK).json({
      success: true,
      data: await ArtistModel.findOne({_id: req.params.id}),
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
  addArtist,
  getArtists,
  getArtistById,
};