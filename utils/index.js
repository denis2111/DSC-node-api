const jwt = require("jsonwebtoken");

const encrypt = (payload) => {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: "2h",
  });
};

const decrypt = (token) => {
  return jwt.decode(token, process.env.SECRET);
};

module.exports = {
  encrypt,
  decrypt,
};