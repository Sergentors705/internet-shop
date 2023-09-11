const Router = require("express");
const brandController = require("../controllers/brand-controller");
const checkRole = require("../middleware/check-role-middleware");
const router = new Router();

router.post("/",checkRole("ADMIN") , brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
