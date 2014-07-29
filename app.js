var express = require('express')
  , http = require('http')
  , path = require('path');

//declare modules
var user = require('./lib/user');

var app = express();

//BD connection
var mysql = require('mysql');
var myConnection = require('express-myconnection');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//debe ir antes de la linea aap.use(app.router)
app.use(myConnection(mysql,{
			host: '127.0.0.1',
	        user: 'usuario',
	        password : 'miclave',
	        port : 3306, //port mysql
	        database:'bdEjemplo'
	    },'request')
	);

//router middleware
app.use(app.router);

// first call
app.get('/', user.show);
app.get('/users', user.show);
app.get('/show', user.show);

//add se declaran tanto metodo GET como metodo POST
//por get dibuja el fomulario, por POST recibe los datos a guardar
app.get('/add', user.add);
app.post('/add', user.addPost);
//edit se declaran tanto metodo GET como metodo POST
//por get dibuja el fomulario, por POST recibe los datos a guardar
app.get('/edit/:id', user.edit); 
app.post('/edit/:id',user.save_edit);
//delete
app.get('/delete/:id', user.delete_u);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
