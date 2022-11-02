// random value generated
  var y=Math.floor(Math.random() * 10 + 1);
  var Guess = 1;
function submit(){
var player_name=localStorage.getItem("player_name")
    var x= document.getElementById("number").value;
    if(x==y){
        alert("Congratulations!"+player_name+" You guessed it right in "+Guess+" Guesses! ");
        Guess=1;
    }
    else if(x > y){
        Guess++;
        alert("Oops, try a smaller number");

    }
else{
    Guess++
    alert("Oops, try a larger number")
}
}
function playagain(){
    y = Math.floor(Math.random() * 10 + 1);
}
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
