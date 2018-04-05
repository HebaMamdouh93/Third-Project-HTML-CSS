/*Global $,alert,console*/
$(function(){
    'use strict';

$(window).scroll(function(){
    if($(window).scrollTop() >= $('.navbar').height()){
       $('.navbar-inverse').css("background","#fff");
        $('.navbar-inverse .navbar-brand').css({
            color:"yellowgreen",
            letterSpacing:"0"
        });
        $('.navbar-inverse .navbar-nav > li > a').css("color","rgba(0,0,0,0.8)");
        $('.navbar-inverse .navbar-nav > li > a.active').css("color","yellowgreen");
        
       }else{
         $('.navbar-inverse').css("background","transparent");
        $('.navbar-inverse .navbar-brand').css({
            color:"rgba(255,255,255,.7)",
            letterSpacing:"10px"
        });
        $('.navbar-inverse .navbar-nav > li > a').css("color","rgba(255,255,255,.7)");
        $('.navbar-inverse .navbar-nav > li > a.active').css("color","yellowgreen");  
       }
});
});
