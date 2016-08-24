var app = angular.module("miApp",[]);

app.controller('myControl', function($scope){
	$scope.nombre="cetor007";
	$scope.apellido="cetor008";
});

app.directive("w3TestDirective", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});


app.directive("w3TestDirective2", function() {
    return {
    	restrict : "A,E,C",
        template : "prueba"
    };
});