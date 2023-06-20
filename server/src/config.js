require('dotenv').config()

const config = {
    appConfig:{
         host: process.env.APP_HOST,
         port: process.env.APP_PORT
    },
    SECRET:"desarrollador api",
    Name_DB:`mongodb+srv://fredarava:${process.env.PASSWORD_MONGODB}@logg.akciqas.mongodb.net/?retryWrites=true&w=majority`
    //Name_DB:`mongodb+srv://fredarava:${process.env.PASSWORD_MONGODB}@logg.akciqas.mongodb.net/${process.env.NAME_COLLECTION}`
}


module.exports = config