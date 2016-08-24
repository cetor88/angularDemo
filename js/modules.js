var app = angular.module("miApp",[]);
app.controller('myControl', ["$scope", function(m){
	m.nombre="cetor007";
	m.apellido="cetor008";
	m.newComment={};
	m.clicker = function(){
		m.apellido= "hector";
	}
	m.comentarios=[
		{
			titulo:'mensaje1',
			autor:'cetor007'
		},
		{
			titulo:'mensaje2',
			autor:'@ana'
		}
	];
	m.addComment = function(){
		console.info("Si estoy" + m.newComment.apellido);

		m.comentarios.push(m.newComment);
		m.newComment={};
	}
}]);