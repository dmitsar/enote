const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin:{type: Boolean, default: false, required: true}, //Возможно админа надо убрать хз пока
    films: [{type: Types.ObjectId, ref: 'Film'}]
})

module.exports = model ('User', schema)
