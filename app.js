var express = require('express');

var jsonDATA = {count: 12, message: 'hey'};

const app = express();

app.get('/', function(req, res){
    console.log('ran GET / route,');
    
    res.sendFile(__dirname + '/index.html', function(err){
        if(err){
            res.status(500).send(err);
        }
    })
});

app.get('/data', function(req, res){
    console.log('ran GET /data route');
   res.json(jsonDATA);
})

var port = 3000;

app.listen(port, function(){
    console.log('Listening on port ' + port);
});


