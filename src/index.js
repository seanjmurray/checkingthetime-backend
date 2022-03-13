require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const Watch = require('./models/watchSchema')

const originHeaderURL = process.env.ORIGIN_URL

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", originHeaderURL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.route('/api/watches')
    .get((req,res) => {
      Watch.find({})
        .then(dbData => {
          res.send(dbData)
        })
        .catch(err => {
          console.log(err)
          res.status(400).send('Database error')
        })
        
    })
    .post((req, res) => {
      const newWatch = new Watch({...req.body.form})
      newWatch.save()
        .then((dbData) => {
          res.send('uploaded')
        })
        .catch(err => {
          console.log(err)
          res.status(400).send('Database error')
        })
      
    })

mongoose.connect(process.env.DB_URL)
  .then(() => {
    app.listen(8080, () => {
      console.log('I am alive on 8080')
    })
  })
  .catch((e) => console.error(e))