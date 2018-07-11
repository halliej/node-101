//1
const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
    
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
//comment out the next 2 lines if you don't want to see directory listings of the public folder
app.use('/public', serveIndex(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.get('/', (req, res) => {
    fs.readFile('./welcome.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else
        {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

app.use((req,res) => { 
    res.writeHead(404);
    var output = '<html><body><h1>Cannot load page ' + req.url + '!</h1></body></html>';
    res.end(output);
});
 
http.createServer(app).listen(app.get('port'), () => {
  console.log(`El Cheepo Webserver listening on port ${app.get('port')}.`);
});