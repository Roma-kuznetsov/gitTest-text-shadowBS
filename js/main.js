
"use strict"


$(document).ready(function(){
/*
	$('.generator1').on('input change','input',function(){
		var font_size = $('#font-size').val()
		var offset_x = $('#offset_x ').val()
		var offset_y = $('#offset_y').val()
		var blur = $('#blur').val()
		var opacity = $('#opacity').val()
		var text = $('.my__text__shadow')
		text.css(`font-size: 40px;`)


	})
*/

	function cssShadow({
		font_size,
		offset_y,
		offset_x,
		blur,
		opacity,
		color,
		rgba,
		
	})
	{
		var cssStyle = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba;
		$('h1').css('text-shadow', cssStyle);
		$('#resHex').val('text-shadow: ' + color + ' ' + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + ';\nopacity: ' + opacity + ';\nfont-size: ' + font_size + 'px;')
		$('#resRgba').val('text-shadow: ' + rgba + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + ';\nfont-size: ' + font_size + 'px;')
		

	}
	cssShadow({
			font_size: 40,
			offset_y: -1,
			offset_x: 4,
			blur: 0,
			opacity: 1,
			color: '#ff0000',
			rgba: 'rgba(255,0,0,1)',
		});

	$('.generator1').on('input change', 'input', function () {
		var font_size = $('#font_size').val();
		var offset_y = $('#offset_y').val();
		var offset_x = $('#offset_x').val();
		var blur = $('#blur').val();
		var opacity = $('#opacity').val();
		var color = $('input[type = "color"]').val()+'';
		var red16 = color[1] + '' + color[2];
		var green16 = color[3] + '' + color[4];
		var blue16 = color [5] + '' + color[6];
		var red10 = parseInt(red16, 16);
		var green10 = parseInt(green16, 16);
		var blue10 = parseInt(blue16, 16);
		var rgba = 'rgba(' + red10 + ',' + green10 + ',' + blue10 +',' + opacity +') ';

		$('h1').css('fontSize',font_size + 'px');
		cssShadow({
			font_size: font_size,
			offset_y: offset_y,
			offset_x: offset_x,
			blur: blur,
			opacity: opacity,
			color: color,
			rgba: rgba,
		});
	});

	$('.generator2').on('input change', 'input', function(){
		var color1 = $('.grcolor1[type = "color"]').val()+''
		var color2 = $('#grcolor2[type = "color"]').val()+''
		var range1 = $('#color1').val()
		var range2 = $('#color1').val()
		alert(color2)
	});







		

});