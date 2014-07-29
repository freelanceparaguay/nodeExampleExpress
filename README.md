Ejemplo Node.js + Express +Mysql.
===================================
Esta aplicacion ilustra el uso de una base de datos en este caso Mysql.<br>
Se agregan registros a una tabla y se permiten opciones basicas para acceso a los datos:<br>
* Mostrar.<br>
* Agregar.<br>
* Editar.<br>
* Borrar<br>	
Es un ejemplo basico, pero es necesario trabajarlo para lograr utilizarlo como un sistema Modelo Vista Controlador.
La estructura de los arhivos no se encuentra preparada para agregar modulos, aun asi, sirve como ejemplo inicial
Se manejan como conceptos:
* Framework Express().
* Vista de HTML utilizando EJS.
* HTML basico.<br>
Las funciones de agregar, editar, borrar, se hacen llamando urls con el metodo GET a las cuales se le pasan los parametros de los registros en los que se trabajara.
No se colocaron acentos en esta pagina.

Configurar mysql y una base de datos
========================================
desde root mysqladmin create bdEjemplo -p 
desde root mysql -u root -pmiclave
SET PASSWORD=PASSWORD('miclave'); 
GRANT ALL ON bdEjemplo.* to usuario@localhost; 
IDENTIFIED BY 'miclave'; 
$ mysql -u usuario -miclave --database bdEjemplo < bdEjemplo.sql


Ejecutar la app
===========================================
$ node app.js

Visite [Otro blog de tecnologias](http://otroblogdetecnologias.blogspot.com)
Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   
Nodeclipse is free open-source project that grows with your contributions.
