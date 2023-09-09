const ApiError = require("../error/api-error");
const bcrypt = require("bcrypt");
const {User, Basket} = require("../models/models");

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Invalid email or password"));
    }
    const candidate = await User.findOne({where: {email}});
  }

  async login(req, res) {}

  async check(req, res, next) {
    const {id} = req.query;
    if (!id) {
      return next(ApiError.badRequest("ID not set"))
    }
    res.json(id);
  }
}

module.exports = new UserController();
