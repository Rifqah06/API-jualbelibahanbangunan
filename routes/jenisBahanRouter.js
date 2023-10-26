const router = require("express").Router();
const JenisBahan = require("../controller/jenisBahanController");

router.post("/create", JenisBahan.insertJenisBahan);

module.exports =  router