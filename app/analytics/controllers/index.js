const { texts } = require("../../../utils/texts")
const { CustomResponse } = require("../../../utils/customResponse")

const Service = require("../services")
const Validations = require("../validations")

module.exports.getUsers = async (req, res) => {
  const data = await Validations.getUsers({
    userId: req.userId,
    organizationId: req.organizationId,
    ...req.query,
  })

  const response = await Service.getUsers(data)

  res.status(200).json(CustomResponse(texts.analytics, response))
}

module.exports.getUsersChart = async (req, res) => {
  const data = await Validations.getUsersChart({
    userId: req.userId,
    organizationId: req.organizationId,
    ...req.query,
  })

  const response = await Service.getUsersChart(data)

  res.status(200).json(CustomResponse(texts.jobAnalytics, response))
}
