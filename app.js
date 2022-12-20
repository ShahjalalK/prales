// const express = require('express')
// const multer = require('multer')
// const app = express()



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploadeFile')
//     },
//     filename: function (req, file, cb) {
//       const name = Date.now() + '-' + file.originalname
//       cb(null, name)
//     }
//   })

//   const upload = multer({ storage: storage })



// app.get('/register', (req, res) => {
//     res.status(200).sendFile(__dirname + '/views/index.html')
// })

// app.post('/register', upload.single("image"), (req, res) => {
//     res.status(200).send('file is uploaded')
// })

// app.get('/', (req, res) => {
//     res.status(200).send('welcome to our home')
// })

// app.get((req, res) => {
//     res.status(200).send('404 Page not found')
// })


// module.exports = app



const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        message : "I am Home"
    })
})

app.use((req, res) => {
    res.status(404).send({
        message : "404 Page not found"
    })
})



module.exports = app