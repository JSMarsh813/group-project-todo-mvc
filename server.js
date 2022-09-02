const express = require('express') //loading express
const app = express() //can call express easily
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session') //enables them to stay logged in 
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan') //console log events on server, can modify it to show you what the request was. What the request was and how long it took to do it
const connectDB = require('./config/database') 
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs') //
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)

//Placeholder in our server file for the search index to read names in our pokemon collection 
app.get("#", async (req,res) => {
  try {
      let result = await collection.aggregate([ //wait for our result to aggregate data together
          {
              "$search" : { //tell mongo to search
                  "autocomplete" : { //type of search
                      "query": `${req.query.query}`, //our search query
                      "path": "name", 
                      "fuzzy": { //search type
                          "maxEdits": 2, //our user can make 2 spelling errors/characters when searching for a poke and we'll substitute missing or wrong characters
                          "prefixLength": 3 //user needs to type atleast 3 characters
                      }
                  }
              }
          }
      ]).toArray() //dump the return into array so our JS knows what to do with it
      res.send(result)
      // console.log(result)
  } catch (error) {
      res.status(500).send({message: error.message})
      // console.log(error)
  }
})


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
