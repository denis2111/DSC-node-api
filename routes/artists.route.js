const router = require("express").Router();

const { artistsController } = require("../controllers");
const { requireAuth, payloadValidation, paramIdValidation } = require("../middlewares");
const { addArtist: addArtistSchema } = require("../schemas");

router.post("/", requireAuth, payloadValidation(addArtistSchema), artistsController.addArtist);
router.get("/", requireAuth, artistsController.getArtists);
router.get("/:id", requireAuth, paramIdValidation, artistsController.getArtistById);

module.exports = router;