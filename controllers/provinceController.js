const axios = require("axios")
exports.getProvice = (req, res) => {
  axios.get("http://dev.farizdotid.com/api/daerahindonesia/provinsi").then((result) => {
    const province = result.data
    return res.status(200).json({ province })
  }).catch((err) => {
    return res.status(500).json({ message: "Internal Server Error" })
  });
}