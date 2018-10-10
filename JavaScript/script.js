//Apply emoji to #cursor::after 
function applyEmoji(e){
  var val = $(e).val();
  $("#cursor").attr("data-after",val);
}

//Track location of cursor
$("body").mousemove(function(cursor){
	var xLeft = cursor.pageX;
	var yTop = cursor.pageY;
	$("#cursor").css("left",xLeft).css("top",yTop);
});

//Change emoji on dropdown selection
$("select").on('change', function(){
	applyEmoji(this);
});

//On page load, use the "selected" emoji - Ghostman
applyEmoji("option[selected]");
