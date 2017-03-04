import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath  
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Dylan","email":"bob@bobmail.com"},
    {"id": 2,"firstName":"Bruce","lastName":"Springsteen","email":"bruce@brucemail.com"},
    {"id": 3,"firstName":"Neil","lastName":"Hannon","email":"neil@neilmail.com"}
  ]);
});

app.listen(port, function(err){
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
