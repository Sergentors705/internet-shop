const Router = require("express");
const deviceController = require("../controllers/device-controller");
const checkRole = require("../middleware/check-role-middleware");
const router = new Router();

router.post("/", checkRole("ADMIN"), deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
