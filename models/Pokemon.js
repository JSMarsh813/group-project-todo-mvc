const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://bricklebink:nutrag123@cluster0.8ki7f.mongodb.net/test', 
// { useNewUrlParser: true , 
//     useUnifiedTopology: true, 
//     useFindAndModify: false,
//     useCreateIndex: true 
// })

const connection = mongoose.createConnection('mongodb+srv://bricklebink:nutrag123@cluster0.8ki7f.mongodb.net/test', 
{ useNewUrlParser: true , 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true 
})

const PokeSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // }
    name: String
})

const PokeModel = connection.model('Pokemon', PokeSchema)
module.exports = PokeModel