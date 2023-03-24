// Modules 
const http = require('http');
const fs = require('fs') //filesystem
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')



const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log(url.parse(req.url).pathname);
  const params = querystring.parse(url.parse(req.url).query);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if(page == '/api') {
    if('number' in params){
      let randomNum = Math.ceil(Math.random() * 10)
      if(params['number']== randomNum){
        res.writeHead(200, {'Content-Type': 'application/json'});
        

        
        const objToJson = {
          status: "Success",
          number: randomNum,
          unum: params['number']
        }
        res.end(JSON.stringify(objToJson));
      }//number = leon
      else if(params['number'] > randomNum){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          status: 'Lower',
          number: randomNum,
          unum: params['number']
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['number'] < randomNum){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          status: 'Higher',
          number: randomNum,
          unum: params['number']
        }
        res.end(JSON.stringify(objToJson));
      }//number != leon
    }//number if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

   }else if (page == '/download.png'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
      });

  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
