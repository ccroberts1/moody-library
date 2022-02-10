const router = require("express").Router();
const bookRoutes = require("./bookRoutes");
const tagRoutes = require("./tagRoutes");

router.use("/books", bookRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
