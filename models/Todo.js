const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  types: {
    type: [String],
    required: true,
  },
  favorite: {
    type: Boolean,
  },
  userId: {
    type: String,
  },
  height: {
    type: Number,
    default:100,
  },
  weight: {
    type: Number,
    default:100,
  },
  image: {
    type: String,
    required: true,
    default:"image URL here",
  },
  ability: {
    type: [String],
    default:"abilities here",
  },
  attacks: {
    type: [String],
    default:"cool attack moves here",
  },
  description:{
    type:String,
    default:"pokemon description"
  }
 })

module.exports = mongoose.model('Todo', TodoSchema)