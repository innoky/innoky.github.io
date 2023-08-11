let tg = window.Telegram.WebApp;


tg.MainButton.textColor ="#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");

tg.MainButton.setText("Выберите стиль");
tg.MainButton.show();

btn1.addEventListener("click", function(){
    tg.MainButton.setText("Yumeko");
    item = "hmjy1, long hair, blunt bangs, red eyes, school uniform, red jacket, black pantyhose, white shirt, black ribbon, pleated skirt, long sleeves";
    tg.MainButton.show();
});

btn2.addEventListener("click", function(){
    tg.MainButton.setText("Rem");
    item = "re:rem";
    tg.MainButton.show();
});

btn3.addEventListener("click", function(){
    tg.MainButton.setText("Emilia");
    item = "re:emilia";
    tg.MainButton.show();
});

btn4.addEventListener("click", function(){
    tg.MainButton.setText("Neferpitou");
    item = "Neferpitou cat";
    tg.MainButton.show();
});

btn5.addEventListener("click", function(){
    tg.MainButton.setText("Modeus");
    item = "Modeus";
    tg.MainButton.show();
});

btn6.addEventListener("click", function(){
    tg.MainButton.setText("Kitagawa classic");
    item = "kitagawa marin, 1girl, blonde hair, long hair, multicolored hair, red eyes, jewelry, earrings, piercing, school uniform, white shirt, tied shirt, black choker, blue necktie, plaid skirt";
    tg.MainButton.show();
});

btn7.addEventListener("click", function(){
    tg.MainButton.setText("Kitagawa beach");
    item = "kitagawa marin, 1girl, blonde hair, long hair, multicolored hair, red eyes, jewelry, necklace, choker, black bikini, floral print, bracelet, side-tie bikini bottom";
    tg.MainButton.show();
});

btn8.addEventListener("click", function(){
    tg.MainButton.setText("Mikasa");
    item = "1girl, mikasa";
    tg.MainButton.show();
});

btn9.addEventListener("click", function(){
    tg.MainButton.setText("Galleu");
    item = "1girl, rem galleu, nekogirl";
    tg.MainButton.show();
});

btn10.addEventListener("click", function(){
    tg.MainButton.setText("Emilico");
    item = "1girl, emilico";
    tg.MainButton.show();
});

btn11.addEventListener("click", function(){
    tg.MainButton.setText("L (lawliet)");
    item = "lawliet";
    tg.MainButton.show();
});

btn12.addEventListener("click", function(){
    tg.MainButton.setText("Light");
    item = "yagami light";
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});
