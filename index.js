const stream = require('stream');
var http = require('http');
const express = require('express')
const app = express();
var cors = require('cors');
app.use(cors())
const port = 3000
const StreamArray = require('stream-json/streamers/StreamArray');
const path = require('path');
const fs = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');
// const jsonStream = StreamArray.withParser();
const filename = path.join(__dirname, 'random.json');

app.get('/getData', (req, res) => {
  //You'll get json objects here
  //Key is an array-index here
  console.log(req.query)
  const {
    skip,
    offset
  } = req.query
  const arr = []


  fileStream = fs.createReadStream(filename, { encoding: 'utf8' });
  let count = 0
  fileStream.pipe(JSONStream.parse('random.*')).pipe(es.through(function (data) {
    count++
    if (Number(skip) <= count)
      arr.push({
        data
      })
    if (arr.length >= offset) {
      console.log(arr)
      this.pause();
      return res.send(arr);
      // processOneCustomer(data, this);
    }

    return data;
  }, function end() {
    console.log('stream reading ended');
    this.emit('end');
  })
  );

  // function processOneCustomer(data,es){
  //     es.resume();  
  // }


});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
