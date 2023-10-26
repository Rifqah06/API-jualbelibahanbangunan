const router = require("express").Router();

const JenisBahan = require("./jenisBahanRouter");

router.use("/jenisbahan", JenisBahan);

module.exports = router
