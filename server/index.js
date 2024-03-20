//React server (client) --> not needed in production
//Node server (server) --> needed in production

//How to write express server
const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok'})
})

app.listen(1337, () => {
    console.log("Server started on 1337")

})