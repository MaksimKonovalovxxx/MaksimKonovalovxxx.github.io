"use strict"

/*let count = 0;
while (count < 8){
    console.log(count);
    count++;
}
for(let count = 0; count < 6; count++){
    console.log(count);
    if (count == 2) break;
}
console.log("finish");

for (let count_2 = 0; count_2 < 3; count_2++){
    for(let count = 0; count < 5; count++){
        console.log(count);
    }
}*/

let windoWidth = window.innerWidth;
console.log(windoWidth);

let agent = navigator.userAgent;
console.log(agent);

let way = location.href;
//location.href = "http://yandex.ru"
//history.back();
//history.forward();
console.log(way);

//$("#mir").text("Привет всем");
$(document).ready(function(){
    //$(".row").css("border", '2px solid red');
    $("#gorod").parent().css("border", '2px solid red');
    $("#gorod").children().css("border", '2px solid red');
    $(".container").find("#planet").css("border", '2px solid red');
    $('a[href="https://yandex.ru/"]').css("border", '2px solid red');
    /*$('.wan').click(function(){
        //alert("Its work");
        $(this).toggleClass("red");
    });*/
    $('.wan').mouseenter(function(){
        //alert("Its work");
        $(this).toggleClass("red");
    });
    $('.wan').mouseleave(function(){
        //alert("Its work");
        $(this).toggleClass("red");
    });
    /*$('input').focus(function(){
        alert("foc")
    });*/
    //$("input").keypress(function(){
                    // $("#hello").text("Привет, "+ this.value);});
    
    $('.hidden').click(function(){
        $(this).delay(1000).hide(2000).delay(500).show(2000);
    })
    $(".opacity").click(function(){
        $(this).animate({opacity: 0.25},1000).animate({opacity: 1},1000);
    });
    /*$("img").click(function(){
        $(this).fadeOut(500, function(){
            $(this).attr("src","img/fon/ya.jpg").fadeIn(500);
            $(this).attr("src","img/fon/fon_umey.jpg").fadeIn(500);
        });
    });*/
    
    $("img").click(function(){
        $(this).toggleClass("py-5 my-3");
    });
    $("#bigP").click(function(){
        $(this).text("Новое содержимое!");
    });
    
 $("#bigPP").click(function(){
        $(this).append("Новое содержимое! ").prepend("Старое содержимое ").after("<p>Строка после </p>").before("<span>Строка до </span>");
    });
    
    
});


