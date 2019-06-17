





var month = ["january", "febraury","march","april","may","june","july","august","september","october","november","december"]
var computerChoice = Math.floor(Math.random()*13);
var answer = month[computerChoice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft = 10;
var output = "";
var userLetter = "";


var setup = function()
{

  for (var i=0; i< answer.length; i++)
  {

    display[i] =  "- ";
    output = output + display[i];
  }
  
  document.getElementById("month").innerHTML = output;
  output = "";

}



var submit= function()
{

    output= "";
    userLetter=document.getElementById("letters").value;
    document.getElementById("letters").value="";

    for( var c=0; c< answer.length; c++)
    {

        
        if (userLetter.toLowerCase()== letters[c])
        {
            display[c] = userLetter.toLowerCase();
            win--;
        }
        output = output + display[c]+ " ";
        alert(letters[c]);

        
    }

    

    document.getElementById("month").innerHTML = output;
    output="";
    attemptsLeft--;
    if (win < 1)
    {document.getElementById("guesses").innerHTML = "YOU WIN !!!"}

    else if(attempts <1)

    {
      
      document.getElementById("guesses").innerHTML ="YOU LOSE!!!";
  
    }

    else {

        document.getElementById("guesses").innerHTML = " YOU HAVE "+ attemptsLeft + "guesses Left";
    }

    {window.onload= setup();}
}
}
   
