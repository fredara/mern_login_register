const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require("./config");
const uri = config.Name_DB;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

/*
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

  Oll version
*/