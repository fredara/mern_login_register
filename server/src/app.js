const express = require("express");
const cors = require('cors')
const morgan = require("morgan");

const authRouter = require("./routes/auth.routes");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'CUgKBWeJuFsgBqDfMUGh3zsWOniW7aII',
  issuerBaseURL: 'https://dev-fredara.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    //console.log(req.oidc.isAuthenticated());
  });

app.use("/api/auth", authRouter);
module.exports = app;