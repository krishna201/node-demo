const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
const index = require('./routes/index');
const db = require('./db')
const helper = require("./helper");
const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(db());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(__dirname + '/uploads'));
app.set('port', process.env.PORT || 4444);

app.use(async (req, res, next) =>{
  try {
   
  await helper.initilDataAdd(req, res, next )

   next()
  
  } catch (err) {
    return res.json({ status: 0, msg: "Something error" });
  }
});
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(app.get('port'), async(err,res) => {
  console.log("server is running on 4444");
});

module.exports = app;
