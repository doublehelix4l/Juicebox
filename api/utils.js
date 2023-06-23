const express = require('express');
const usersRouter = express.Router();

function requireUser(req, res, next) {
if (req.headers.Authorization){
req.user = req.body.user
}
if (!req.user){
res.send("You are not authorized to access this route!").status(401)
}
console.log(req.headers)
}

module.exports = {
  requireUser
}