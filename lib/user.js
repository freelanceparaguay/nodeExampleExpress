exports.list = function(req, res){
  res.send("respond with a resource");
};


exports.show = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM LISTADO;',function(err,rows){
			if(err)console.log("Error show : %s ",err );
		            res.render('index',{title:"Ejemplo Node.js + Express() + Mysql",data:rows});   	
		         });
		    });
};//exports.show = function(req, res) {

//si es metodo get, dibuja la pagina
exports.add = function(req, res) {
	console.log("GET -->");
	  res.render('user_add', { title: 'Ejemplo Node.js + Express() + Mysql'});
};

//si es metodo post, agrega datos
exports.addPost = function(req, res) {
	//	  res.render('user_add', { title: 'User Add'});
	console.log('POST FORMULARIO');
    var apellido = req.body.formulario.APELLIDO;
    var descripcion = req.body.formulario.DESCRIPCION;
        var data = {            
            apellido    : apellido,
            descripcion : descripcion,        
        };      
    //----------------------guardar en base de datos--------
	req.getConnection(function(err,connection){
		connection.query('INSERT INTO LISTADO set ?',data,function(err,rows){
			if(err)console.log("Error addPost : %s ",err );
		    		console.log(rows);   	
		         });
		    });    
    //------------------------------
	res.end();
};

//borrar datos
exports.delete_u = function(req,res){  
    var id = req.params.id;
    req.getConnection(function (err, connection) {
       connection.query("DELETE FROM LISTADO  WHERE id = ? ",[id], function(err, rows)
       {
            if(err)
                console.log("Error delete_u : %s ",err );   
            res.redirect('/show');
       });       
    });
};

//editar datos
exports.edit = function(req, res){    
	  var id = req.params.id;	    
	  req.getConnection(function(err,connection){
	     connection.query('SELECT * FROM LISTADO WHERE id = ?',[id],function(err,rows)
	        {          
	            if(err)
	                console.log("Error edit : %s ",err );
	            res.render('user_edit',{title:"Ejemplo Node.js + Express() + Mysql",data:rows});           
	         });
	    }); 
	};



exports.save_edit = function(req,res){  
    var id = req.params.id;   
    var apellido = req.body.formulario.APELLIDO;
    var descripcion = req.body.formulario.DESCRIPCION;    
    req.getConnection(function (err, connection) {
        	var data = {            
                apellido    : apellido,
                descripcion : descripcion,        
            };            
        connection.query("UPDATE LISTADO set ? WHERE id = ? ",[data,id], function(err, rows)
        {
          if (err)
              console.log("Error save_edit : %s ",err );
          res.redirect('/show');
        });
    });
};
