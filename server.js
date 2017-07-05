const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/homenew', function (req, res) {
    res.render('homeNew');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
