const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
const multer = require('multer')
const app = express()

// connect db
mongoose.connect ("mongodb+srv://loop:loop@cluster0.mfhexe4.mongodb.net/test?retryWrites=true&w=majority")

app.use(cors(
    {
        origin: ["https://genreglider.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
    ));

// routes
app.use('/images', express.static('public/images'))
port = process.env.PORT || 3333;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use('/blog', blogController)

// multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
})

app.get('/', (req, res) => {
    res.status(200).json('Welcome, server is working well');
  })
  
  // connect server
  
  app.listen(process.env.PORT, () =>{
    console.log('Server has been started successfully');
  });
