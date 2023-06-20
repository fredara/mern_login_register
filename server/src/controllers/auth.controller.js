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
      jwtToken: ''
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
      jwtToken: token
    });
  }



      
   

  

};

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const existeCorreo = await User.findOne({ email: email });

  if(existeCorreo){
    const matchPasswordD = await User.comparePassword (password, existeCorreo.password)

    if(!matchPasswordD) {
      return res.json({
        statusCode: 401,
        messageResponse: 'Contraseña Incorrecta',
        idUser: '',
        jwtToken: ''
      });
    }else{
      //todo exitoso

      const token = jwt.sign({ id: User._id }, config.SECRET, {
        expiresIn: 86400, //24 horas
      });

      res.json({
        statusCode: 200,
        messageResponse: 'Iniciado Sesion',
        idUser: User._id,
        jwtToken: token
      });
    }
  }else{
    res.json({
      statusCode: 401,
      messageResponse: 'Email no Registrado',
      idUser: '',
      jwtToken: ''
    });
  }
};



module.exports = {
  signUp,
  login
};
