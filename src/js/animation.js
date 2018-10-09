var $ = require('jquery');
$('#layr1').hover(
     function(){
         fadein();
     },
     function(){
         fadeout();
     })


     function fadein(){
         $('#layr1 h1').fadeIn(500,function(){
            $('#layr1 p').fadeIn(500)
         })
     }

    function fadeout(){
        $('#layr1 p').fadeOut(500,function(){
            $('#layr1 h1').fadeOut(500)
        })
    }
