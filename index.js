const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.DB_CONFIG).then((data) => {
  console.log('Connected....')
})

const app = express()

//import routes

const userRoutes = require('./routes/user.routes')
const offreRoutes = require('./routes/offre.routes')
const clientRoutes = require('./routes/client.routes')
const serviceRoutes = require('./routes/service.routes')
const testomanialRoutes = require('./routes/testamoniel.routes')
const expertRoute = require('./routes/expert.routes')
const resumeRoute = require('./routes/resume.routes')
const messageRoute = require('./routes/message.routes')
const newsRoute = require('./routes/news.routes')
// Setup static files path
app.use('/api/uploads', express.static(path.join(__dirname + '/uploads')))
app.use(cors())
// Use body parser middleware to parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Setup CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

// routes middleware

app.use('/api/user', userRoutes)
app.use('/api/offre', offreRoutes)
app.use('/api/client', clientRoutes)
app.use('/api/service', serviceRoutes)
app.use('/api/testomanial', testomanialRoutes)
app.use('/api/expert', expertRoute)
app.use('/api/resume', resumeRoute)
app.use('/api/message', messageRoute)
app.use('/api/news', newsRoute)
app.listen(3000, () => {
  console.log('app is running')
})
