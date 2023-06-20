const app = require ('./app')
const database  = require('./database')
const PORT = process.env.PORT || 4001;
app.listen(PORT)
console.log('server listen on port:',PORT)