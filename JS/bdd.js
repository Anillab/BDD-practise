var Number;
$(document).ready(function(){

$('form.num').submit(function(event){
Number=parseInt($("#in").val());
$(".list").text('');
for(var i=1;i<=Number;i++){
if(i % 15==0){
 $(".list").append('<li>pingpong</li>');
}
else if(i % 5==0){
 $(".list").append('<li>pong</li>');
}
 else if(i %3==0){
 $(".list").append('<li>ping</li>');
}
else{
   $(".list").append('<li>'+i+ '</li>');
}
}
$("#in").val('')
event.preventDefault();
});

});
