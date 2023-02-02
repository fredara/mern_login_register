const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')


const UsersSchema = new Schema({

  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },


  password: {
    type: String,
    unique: false,
    trim: true,
  }
  
  

});


//methods encrypt password
UsersSchema.statics.encryptPassword = async (password) => {
  const salt =  await bcrypt.genSalt(10); //method gensalt algoritmo repeat 10 // mientras mas repite mas consumo
  return await bcrypt.hash(password, salt); //method hash encrypt password
};

UsersSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword); //method comparereceives 2 params
};

module.exports = model("user", UsersSchema);
