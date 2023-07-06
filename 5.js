// for the player 1
var randomnumber1 = Math.floor(Math.random()*6)+1;
var dicimg = "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dicimg);

// for the player 2
var randomnumber2 = Math.floor(Math.random()*6)+1;
var dicimg1 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dicimg1);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player1 Win🎯";
}
else
 if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player2 Win🎯";
}
else
{
    document.querySelector("h1").innerText='Draw!';
}
document.addEventListener("keydown",function(event){
console.log(event.key)
});
document.body.style.background= `#${Math. floor (Math. random () *234).toString(16)}`