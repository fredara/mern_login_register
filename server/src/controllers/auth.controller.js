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

  const existeCorreo = await User.findOne({ email: email });
  if(existeCorreo){
    res.json({
      statusCode: 401,
      messageResponse: 'Email Repetido',
      idUser: '',
      idToken: ''
    });
  }else{
    //save user
    const saveUser = await newUser.save();
    //token
    const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
      expiresIn: 86400, //24 horas
    });

    res.json({
      statusCode: 200,
      messageResponse: 'Guardado',
      idUser: saveUser._id,
      idToken: token
    });
  }



      
   

  

};



module.exports = {
  signUp
};
