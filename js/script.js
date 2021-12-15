function textChange(){
	document.getElementById('p').innerHTML="Text chang by Id selector";
}
function textChangeClass(){
	document.getElementsByClassName('change')[1].innerHTML= "Text chang by Class selector";
}
function textChangeDate(){
	document.getElementById('date').innerHTML=Date();
}
function textChangeRepeat(){
	var data= "Repeat the word "
	document.getElementById('repeat').innerHTML=data.repeat(2);
}
function styleChange(){
	document.getElementById('text_style').style.color = "red";
	document.getElementById('text_style1').style.fontSize = "100px";
	document.getElementById('text_style2').style.border = "1px solid red";
}
function imgOne(){
	document.getElementById('img').src = "img/work2.jpg";
}
function imgTwo(){
	document.getElementById('img').src = "img/work3.jpg";
}

$(document).ready(function(){
	alert("Welcome to jQuery Practice")

	//hide
	$('.hide').click(function(){
		$('#img3').hide("fast");
	});

	//show
	$('#show').click(function(){
		$('#img3').show(1000);
	});

	//Toggle
	$('#toggle').click(function(){
		$('#img3').toggle("slow");
	});
});