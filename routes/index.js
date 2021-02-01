const router = require("express").Router();

const authRoutes = require("./auth.route");
const usersRoutes = require("./users.route");
const artistsRoutes = require("./artists.route");
const albumsRoutes = require("./albums.route");

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/artists", artistsRoutes);
router.use("/albums", albumsRoutes);

module.exports = router;