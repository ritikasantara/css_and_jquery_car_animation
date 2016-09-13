
$(document).ready(function(){	
		

  $( "#wrap" ).draggable();
  $("#button1").click(function(){
  
        $("#wrap").animate({left:"+=700px"},"slow");
  });
  
  $("#button2").click(function(){
  
        $("#wrap").animate({left:"-=700px"},"slow");
		
  });
  


   
});
	
	
