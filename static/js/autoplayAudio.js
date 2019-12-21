
$( document ).ready(function(){
            var x = document.getElementById("player");
						
          	function playSong() {
            	  x.play();
								x.setAttribute('controls', true);;
            }
          
            $('body').click(function(){
             	 playSong();
            }); 

});
