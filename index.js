var randomNumber1= Math.random();               //selects nmu randomly from 0-0.99999999
randomNumber1=randomNumber1*6;                 //selects nmu randomly from 0-5
randomNumber1= Math.floor(randomNumber1)+1;   // selects random num from 1-6

var randomImg= "dice" +randomNumber1 +".png";   //selects from dice1.png to dice6.png
var randomImgSrc= "images/" + randomImg;        //selects from images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);


var randomNumber2= Math.random();               //selects nmu randomly from 0-0.99999999
randomNumber2=randomNumber2*6;                 //selects nmu randomly from 0-5
randomNumber2= Math.floor(randomNumber2)+1;

var randomImgSrc2 = "images/dice" +randomNumber2+ ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);


//If player1 wins
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML= "🏁Player 1 wins!!!"
}
else if(randomNumber2>randomNumber1){

  document.querySelector("h1").innerHTML= "Player 2 wins!!!🏁"
}
else{
  document.querySelector("h1").innerHTML= "Draw🤝"
}
