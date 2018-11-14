'use strict'

//Settings
const auth__atlas = {
    DBUSER:'mongos',
    DBPASSWORD:'mongospass'
}

//Mongo Atlas string
const URI = `mongodb://${auth__atlas.DBUSER}:${auth__atlas.DBPASSWORD}@cluster0-shard-00-00-ujz6u.mongodb.net:27017,cluster0-shard-00-01-ujz6u.mongodb.net:27017,cluster0-shard-00-02-ujz6u.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;

module.exports = {
    PORT:process.env.PORT || 3000,
    DB: process.env.MONGODB || URI,
}