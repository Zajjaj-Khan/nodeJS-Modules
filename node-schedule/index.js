const express = require("express");
const schedule = require('node-schedule');
const app = express();

app.use(express.json());

schedule.scheduleJob('10 * * * * *', function(){
    app.get('/', function(req, res){
        res.send("This is working now!")
    });
    console.log("This is working")
  });
app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
