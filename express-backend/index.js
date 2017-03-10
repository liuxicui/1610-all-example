const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/username',function(req,res){
  res.send({username: 'cuicui'});
})

app.listen(3000,function(){
  console.log('running on port 3000...');
})
