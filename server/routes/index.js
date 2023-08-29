const Router = require("express");
const router = new Router();
const brandRouter = require("./brand-router");
const userRouter = require("./user-router");
const typeRouter = require("./type-router");
const deviceRouter = require("./device-router");

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);

module.exports = router;
