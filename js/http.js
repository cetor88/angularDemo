var app = angular.module("miApp",[]);
app.controller('myControl', ["$scope", "$http",function(m, $h){
	m.postArr=[];
	
	m.respuestaPost={};
	$h.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(data){
		console.info(data);
		console.info("method get()");
		m.postArr=data;
	})
	.error(function(){

	});

	m.asignar = function(){
		console.info("aisgnar");
		$h.post('http://jsonplaceholder.typicode.com/posts', 
			{title:m.respuestaPost.title, 
				body:m.respuestaPost.body,
				userId:1})
		.success(function(data){
			console.info(data);
			m.postArr.push(data);
			
		})
		.error(function(){
			console.info("ocurrio uun error");
		});
	
	
	}
}]);