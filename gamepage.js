// random value generated
var y = Math.floor(Math.random() * 10 + 1 );



function submit()
{  
// counting the number of guesses
// made for correct Guess
var x = document.getElementById("guessField").value;
if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
    + guess + " GUESS ");
    guess= 1;
}

// function for number guessed by user     
else if (x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
} 
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}