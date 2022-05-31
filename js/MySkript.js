"use strict"

if (confirm ("Привет")){
    console.log("Привет");}


let tip = prompt("Тип сайта? Введите свое значение:", "1-Для себя? 2-Для Коммерции?");
console.log(tip);
if (tip == "1"){alert("5000 рублей")}
else if (tip == "2"){alert("7000 рублей")}
else{alert("Вы ввели что то не то")};

let dizain = prompt("Какой дизайн? Введите свое значение:", "1-Промышленный, 2-Домашний, 3-Офисный?");
console.log(dizain);
if (dizain == "1"){alert("5000 рублей")}
else if (dizain == "2"){alert("7000 рублей")}
else if (dizain == "3"){alert("10000 рублей")}
else{alert("Вы ввели что то не то")};

let adaptiv = prompt("Адаптивность? Введите свое значение:", "1-Смартфон, 2-ПК, 3-Планшет?");
console.log(adaptiv);
if (adaptiv == "1"){alert("5000")}
else if (adaptiv == "2"){alert("7000")}
else if (adaptiv == "3"){alert("10000")}
else{alert("Вы ввели что то не то")};

