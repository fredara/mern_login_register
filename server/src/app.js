const express = require("express");
const cors = require('cors')
const morgan = require("morgan");

const authRouter = require("./routes/auth.routes");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json("welcome");
}); 

app.use("/api/auth", authRouter);
module.exports = app;