// JQuery (the open source JS library) allows you to harness the power of JS to accomplish a myriad of awesome things on your webpage, with JQuery you might:

// add delete modify HTML elements with HTML

// Cjange styles of elements on pages by modifying their associated css

// animate elements

//  Send and receive data from a server via AJAX (asynchronous JS and XML) so your page doesnt have to be reloaded aftere submitting a form 

// let listItems =document.querySelectorAll('li');
// let i;
// for (i = 0; i < listItems.length; i++) {
//     listItems(i).className = 'starred';
// }

// // JQuery 

// --------------

$(document).ready(function(){
    $("div").click(function(){
      $(this).hide();
    });
  });

$("#btn").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

$(document).ready(function(){
    $("#button").click(function(){
      $(".uno").animate({left: '70%'}, 1000);
      $(".dos").animate({left: '70%'}, 1000);
      $(".dres").animate({left: '70%'} ,1000);
    });
  });

$(document).ready(function(){
    $("#ani").click(function(){
      var div = $(".uno, .dos, .dres");
      div.animate({height: '300px', opacity: '0.4'}, "fast");
      div.animate({width: '300px', opacity: '0.8'}, "fast");
      div.animate({height: '100px', opacity: '0.4'}, "fast");
      div.animate({width: '100px', opacity: '0.8'}, "fast");
    });
  });