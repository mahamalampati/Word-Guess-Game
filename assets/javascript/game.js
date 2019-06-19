
var game = function(id){

  return document.getElementById(id);
}




var month 
var computerWord 
var answer 
var myLength 
var display 
var win 
var letters 
var attemptsLeft 
var output 
var userWord 


var setup = function()
{
   month = ["january", "febraury","march","april","may","june","july","august","september","october","november","december"]
   computerWord = Math.floor(Math.random()*13);
   answer = month[computerWord];
   myLength = answer.length;
   display = [myLength];
   win = myLength;
   letters = answer.split('');
   attemptsLeft = 10;
   output = "";
   userWord = "";

   
  for (var i=0; i< answer.length; i++)
  {

    display[i] =  "- ";
    output = output + display[i];
  }
  
  game("month").innerHTML = output;
  output = "";
  

}



var submit= function()
{

    output= "";
    userWord=game("letters").value;
    game("letters").value="";

    for( var c=0; c< answer.length; c++)
    {
      
        if (userWord.toLowerCase()== letters[c])
        {
            display[c] = userWord.toLowerCase();
            win--;
        }
        output = output + display[c]+ " ";
        

        
    }

    

    game("month").innerHTML = output;
    output="";
    attemptsLeft--;
    if (win < 1)
    {game("guesses").innerHTML = "YOU WIN !!!"
    
    setup();
  
  }

  

    else if(attemptsLeft <1)

    {
      
      game("guesses").innerHTML ="YOU LOSE!!!";
      setup();
  
    }

    else {

        game("guesses").innerHTML = " YOU HAVE "+ attemptsLeft + " GUESSES LEFT";
    }
}


    window.onload = function()

    {
         setup();
      

    }

  
   
