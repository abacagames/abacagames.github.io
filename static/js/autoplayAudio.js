    
$( document ).ready(function(){
            var x = document.getElementById("player");
						
          	function playSong() {
            	  x.play();
            }
          
            $('body').click(function(){
             	 playSong();
            }); 

});
