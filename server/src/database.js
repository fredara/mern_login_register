const mongoose  = require("mongoose");
const config = require("./config");

mongoose.set("strictQuery", false);
mongoose 
  .connect(config.Name_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("db is connect", config.Name_DB))
  .catch((error) => console.log(error));