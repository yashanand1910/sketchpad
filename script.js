$(document).ready(function(){
	changegrid();
	startSketching();
});

function changegrid(){
	$('.container').empty();
	var n = prompt("Enter value of n (n x n grid):");
	var x = 700/n;
	for(var i = 0; i < n*n; i++){
		$('.container').append("<div class='square'></div>");
	}
	$('.square').height(x);
	$('.square').width(x);
	startSketching();
}

function startSketching(){
	$('.square').hover(function(){
		x = Math.floor(Math.random() * 256*256*256);
		y = '#' + x.toString(16);
		$(this).css('background-color', y);
	});
}