const UserController = require("../controllers/userController");
const Router = require("express");
const router = new Router();

router.post("/register", UserController.create);

module.exports = router;
