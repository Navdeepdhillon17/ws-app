const pgp = require('pg-promise')()

const cnx ={
    host:'****',
    port:***,
    user:'postgres',
    password:'****',
    database:'*****'
}

module.exports = pgp(cnx)
