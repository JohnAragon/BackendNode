'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',{
//current URL string parse(Deprecated)
useUnifiedTopology: true,
useNewUrlParser: true,
}).then(()=>{

			console.log("Conexión con base de datos con éxito...");
			//Creación del servidor
			app.listen(port, ()=>{
				console.log("servidor corriendo correctamente en la url:3700")
			})

		})
		.catch(err => console.log(err));