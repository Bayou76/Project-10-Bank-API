const userService = require('../services/userService')

module.exports.createUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.createUser(req.body)
    response.status = 200
    response.message = 'User successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
