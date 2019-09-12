const axios = require("axios")
exports.getCity = (req, res) => {
  const ProvinceId = req.params.idprovince
  console.log(ProvinceId)
  axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/${ProvinceId}/kabupaten`).then((result) => {
    const province = result.data
    console.log(province)
    return res.status(200).json({ province })
  }).catch((err) => {
    return res.status(500).json({ message: "Internal Server Error" })
  });

}