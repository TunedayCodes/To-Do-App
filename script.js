//THIS FUNCTION TAKES IN THE USER'S INPUT ON KEYPRESS AND ENTER KEY, DISPLAY IT AND ADD A DELETE ICON TO THE LIST THEN FINALLY RESET THE INPUT BOX FOR A NEW ITEM TO BE ADDED

$(".todoinput").keypress(function(event){
   if(event.which === 13){
      if($(this).val()=== "") return;
         $("ul").prepend("<li><span class='left'><i class='fa fa-trash'></i></span> "+$(this).val());
         $(this).val("");
   }
});

//THIS LINE OF CODE HAS A FUNCTION WHICH TOGGLE ON AND OFF THE INPUT BOX BY CLICKING ON THE PLUS ICON

$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});

// $("ul").on("click", "span.text", function(event) {
// 	$(this).toggleClass("completed");
// });

//THIS LINE OF CODE HAS A FUNCTION WHICH TARGETS THE DELETE ICON BY THE LEFT  AND ON CLICK IT FADES OUT at 500MS and IT PERFORMS A CALLBACK FUNCTION to REMOVE ITEM SPAN WITH A CLASS OF "LEFT" and the function ends there with an event.stopPropagation()

$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	 event.stopPropagation();
});



//THE REST OF THESE LINES OF CODE IS ACTIVATED IF THE USER DECIDES TO EDIT THE LISTED TO-DO ITEM

// $("ul").on("click", "span.right", function(event) {
// 	var parent = $(this).parent();
// 	var oldVal = parent.text();
// 	parent.html("<input type='text' class='editinput'>");
// 	$(".editinput").keypress(function(e) {
// 		if(e.which === 13) {
// 			if($(this).val() === "") {
// 				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+oldVal+"</span><span class='right'><i class='fa fa-pencil'>");	
// 			}
// 			else {
// 				var newVal = $(this).val();
// 				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+newVal+"</span><span class='right'><i class='fa fa-pencil'>");
// 			}
// 		}
// 		e.stopPropagation();
// 	});
// 	event.stopPropagation();
// });