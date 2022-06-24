"use strict"

/*if (confirm ("Привет")){
    console.log("Привет");}

let price1 = 5000;
let price2 = 7000;
let price3 = 10000;





let tip = prompt("Тип сайта? Введите свое значение:", "1-Для себя? 2-Для Коммерции?");
console.log(tip);
if (tip == "1"){tip = price1}
else if (tip == "2"){tip = price2}
else{alert("Вы ввели что то не то")};

let dizain = prompt("Какой дизайн? Введите свое значение:", "1-Промышленный, 2-Домашний, 3-Офисный?");
console.log(dizain);
if (dizain == "1"){dizain = price1}
else if (dizain == "2"){dizain = price2}
else if (dizain == "3"){dizain = price3}
else{alert("Вы ввели что то не то")};

let adaptiv = prompt("Адаптивность? Введите свое значение:", "1-Смартфон, 2-ПК, 3-Планшет?");
console.log(adaptiv);
if (adaptiv == "1"){adaptiv = price1}
else if (adaptiv == "2"){adaptiv = price2}
else if (adaptiv == "3"){adaptiv = price3}
else{alert("Вы ввели что то не то")};

let price = tip + dizain + adaptiv;
console.log(price);

alert(price);*/
   $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});


/*$(window).scroll(()=>{
    let scrollDistance = $(window).scrollTop();
   $(".section").each((i, el)=>{
       if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
           $("nav a").each((i, el) => {
               if($(el).hasClass("active")){
                   $(el).removeClass("active");
               }
           });
           
           $('nav li:eq('+ i +')').find('a').addClass('active');
       }
   }); 
});*/
    
    $('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

setTimeout(function(){ 
	$(".modalopen").click();
}, 20000);

$(function() {
	
		$({numberValue: 0}).animate({numberValue: 120}, {
		
			duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			
			step: function(val) {
			
				$(".price").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
		
	});
       
       $(function() {
	
		$({numberValue: 0}).animate({numberValue: 4600}, {
		
			duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			
			step: function(val) {
			
				$(".time").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
		
	});
       
       $(function() {
	
		$({numberValue: 0}).animate({numberValue: 340}, {
		
			duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			
			step: function(val) {
			
				$(".proj").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
		
	});
       
       $(function() {
	
		$({numberValue: 0}).animate({numberValue: 23}, {
		
			duration: 5000, 
			easing: "linear",
			
			step: function(val) {
			
				$(".nagrada").html(Math.ceil(val)); 
				
			}
			
		});
		
	});
       });

    /* let options = {threshold:[0.8]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.price, .time, .proj, .nagrada');
    elements.each((i,el) =>{
        observer.observe(el);
    });
    
    
    function onEntry(entry){
    entry.forEach(change =>{
        if(change.isIntersecting){
            change.target.classList.add('show-animation');
          
        }
       
        }*/

