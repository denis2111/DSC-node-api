const router = require("express").Router();

const { usersController } = require("../controllers");
const { requireAuth } = require("../middlewares");


module.exports = router;