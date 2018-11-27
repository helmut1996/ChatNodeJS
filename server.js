const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

//config
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//router
app.use(require('./app/Router'));
//
app.use(express.static(path.join(__dirname, 'public')));
server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})