
$(document).ready(function($) {

    $(".scroll_move").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

    });

});

function div_OnOff(v,id){
 
    if(v == "3"){
     document.getElementById(id).style.display = ""; 
    }else{
     document.getElementById(id).style.display = "none"; 
    }
   }
 
