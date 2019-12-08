const jwt = require("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/main");

// generate jwt token with basic user data
function generateTokenResponse(user) {
  // user info to be included in jwt
  const userInfo = {
    _id: user._id,
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    email: user.email
  };

  return {
    token: `JWT ${ jwt.sign(userInfo, config.secret, { expiresIn: config.jwtLiveTime }) }`,
    user: userInfo
  };
}

exports.status = (request, response, next) => {
  return response.status(200).json({
    authSuccess: true,
    user: request.user
  });
}

// login route
exports.login = (request, response, next) => {
  return response.status(200).json(generateTokenResponse(request.user));
}

// registration route
exports.register = (request, response, next) => {  
  const email = request.body.email;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const password = request.body.password;

  // check for errors
  if (!email)
    return Promise.reject({status: 422, message: "You must enter an email address." });
  if (!firstName || !lastName)
    return Promise.reject({status: 422, message: "You must enter your full name." });
  if (!password)
    return Promise.reject({status: 422, message: "You must enter a password." });

  return User.findOne({ email: email })
    .then(existingUser => {
      // if user is not unique, return error
      if (existingUser)
        return Promise.reject({status: 422, message: "That email address is already in use." });

      // if email is unique and password was provided, create account
      return new User({
        email: email,
        password: password,
        profile: { firstName: firstName, lastName: lastName }
      }).save();
    })
    .then(user => {
      // respond with jwt
      response.status(201).json(generateTokenResponse(user));
    })
    .catch(error => next(error));
}
