const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
// <<<<<<< HEAD
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true
//   }
// =======
    defualt:'pokemon name'
  },
  completed: {
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
  
// >>>>>>> b688fee94f7d1fc83dc8fb149a130516cb1f0501
})

module.exports = mongoose.model('Todo', TodoSchema)
