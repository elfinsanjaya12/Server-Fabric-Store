const axios = require("axios")
exports.getDistrict = (req, res) => {
  const idkabupaten = req.params.idkabupaten
  axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${idkabupaten}/kecamatan`).then((result) => {
    const district = result.data
    console.log(district)
    return res.status(200).json({ district })
  }).catch((err) => {
    return res.status(500).json({ message: "Internal Server Error" })
  });
}
