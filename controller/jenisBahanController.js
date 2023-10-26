const JenisBahan = require("../models/jenisbahan");

const insertJenisBahan = async (req, res) => {

    const {p_namajenis} = req.body;
    try {
      const newNamaJenis = await JenisBahan.insertJenisBahan(req.body.p_namajenis);
        res.status(200).json({
            status: "sukses",
            data: {
                newNamaJenis
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
  };
module.exports = {
    insertJenisBahan
}