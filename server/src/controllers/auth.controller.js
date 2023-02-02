const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const config = require("../config");


const signUp = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  const newUser = new User({
    email,
    password: await User.encryptPassword(password) //devolvera un hash no la contraseña

  });

  //console.log(newUser)

  //save user
  const saveUser = await newUser.save().then(() => {
    //token
    const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
      expiresIn: 86400, //24 horas
    });
    res.status(200).json({ token, id: saveUser._id });
  }).catch(error => {
    res.status(200).json({ sadad: error });
  });

  //console.log(saveUser)




};



module.exports = {
  signUp
};
