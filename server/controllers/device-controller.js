const ApiError = require("../error/api-error");
const {Device} = require("../models/models");
const { v4: uuidv4 } = require('uuid');
const path = require("path");

class DeviceController {
  async create(req, res, next) {
    try {
      const {name, price, brandId, typeId, info} = req.body;
      const {img} = req.files;
      let fileName = uuidv4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({name, price, brandId, typeId, img: fileName});
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const {brandId, typeId} = req.query;
    let devices;
    if (!brandId && !typeId) {
      const devices = await Device.findAll();
    }
    if (brandId && !typeId) {
      const devices = await Device.findAll({where: {brandId}});
    }
    if (!brandId && typeId) {
      const devices = await Device.findAll({where: {typeId}});
    }
    if (brandId && typeId) {
      const devices = await Device.findAll({where: {typeId, brandId}});
    }

    return res.json(devices);
  }
  async getOne(req, res) {}
}

module.exports = new DeviceController();
