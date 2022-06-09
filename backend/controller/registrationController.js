const services = require('../services/registrationServices');

const registration = async (req, res) => {

  const { email, password } = req.body;
  const user = await services.registrationServices({ email, password });
  if (user) {
    res.status(200).json(email);
  } else {
    res.status(404).json({
      status: 404,
      error: 'User not fund',
    });
  }
};

module.exports = {
  registration,
};