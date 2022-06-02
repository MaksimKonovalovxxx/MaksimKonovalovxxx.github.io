"use strict"

if (confirm ("Привет")){
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

let price = prompt (tip(true) + dizain(true) + adaptiv(true))
console.log(price);
