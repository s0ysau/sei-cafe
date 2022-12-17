const {Schema, model} = require('mongoose')

const accountSchema = new Schema ({
  username: String, unique: true,
  password: String
})

const Account = model('Account', accountSchema)

module.exports = Account