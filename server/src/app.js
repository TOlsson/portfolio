// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// MongoDB
const MongoClient = require('mongodb').MongoClient

var info_client
var update_client

const info_uri = process.env.MongoDBInfoUserURI
const update_uri = process.env.MongoDBUpdateUserURI

var mongoInfoClient = new MongoClient(info_uri, {
    reconnectTries : Number.MAX_VALUE,
    autoReconnect: true,
    useNewUrlParser: true
})

mongoInfoClient.connect((err, db) => {
    if (err != null) {
        console.log(err)
        return
    }
    info_client = db
})

var mongoUpdateClient = new MongoClient(update_uri, {
    reconnectTries : Number.MAX_VALUE,
    autoReconnect: true,
    useNewUrlParser: true
})

mongoUpdateClient.connect((err, db) => {
    if (err != null) {
        console.log(err)
        return
    }
    update_client = db
})

// Express
const app = express() // create your express app
// make app use dependencies
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 5000) // client is already running on 8080



app.get('/aboutInfo', (req, res) => {
    const collection = info_client.db('portfolio').collection('user')

    collection.find({
        name: 'Tobias'
    }).toArray((err, user) => {
        if (err) {
            console.log(err)
        }
        res.status(200).send(user[0].about)
    })
})

app.post('/aboutInfo', (req, res) => {
    if (req.body.cookieAuth !== authSecret) {
        res.sendStatus(401)
    }

    const collection = update_client.db('portfolio').collection('user')

    collection.updateOne(
        {name: 'Tobias'},
        {$set: {about: req.body.aboutInfo}}
    )

    collection.find({
        name: 'Tobias'
    }).toArray((err, user) => {
        if (err) {
            console.log(err)
        }
        res.status(202).send(user[0].about)
    })
}) 

var authSecret

app.post('/signIn', (req, res) => {
    const collection = update_client.db('portfolio').collection('user')

    collection.find().toArray((err, user) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
        }
        const dbUsername = Buffer.from(user[0].username, 'base64').toString()
        const dbPassword = Buffer.from(user[0].password, 'base64').toString()

        if (req.body.user !== dbUsername || req.body.pass !== dbPassword) {
            res.sendStatus(203)
        } else {
            require('crypto').randomBytes(48, async (err, buffer) => {
                authSecret = await buffer.toString('hex')
                res.status(202).send({auth: authSecret})
            })
        }
    })
})

app.post('/checkAuth', (req, res) => {
    if (authSecret === undefined ) {
        res.sendStatus(204)
    }
    else if (req.body.cookieAuth === authSecret) {
        res.sendStatus(202)
    }
})