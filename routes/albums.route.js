const router = require("express").Router();

const { albumsController } = require("../controllers");
const { requireAuth, payloadValidation, paramIdValidation } = require("../middlewares");
const { addAlbum: addAlbumSchema } = require("../schemas");

router.post("/", requireAuth, payloadValidation(addAlbumSchema), albumsController.addAlbum);
router.get("/", requireAuth, albumsController.getAlbums);
router.get("/:id", requireAuth, paramIdValidation, albumsController.getAlbumById);


module.exports = router;