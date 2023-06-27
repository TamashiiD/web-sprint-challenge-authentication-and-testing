const db = require('../../data/dbConfig')


function add(user) {
return db('users')
.insert(user)
.then(([id])=> {
    return db('users').where('id', id)
})
}

function find(username){
    return db('users')
    .where("username", username)
    .first()
}



module.exports = {
    add,
    find,
   
}