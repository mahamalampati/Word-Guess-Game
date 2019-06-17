// I hope you know that this does not make it jQuery
// it is just an alias to document.getElementById()
// which is fine, but then you should uses it everywhere
// you are selecting by id, otherwise it is just dead code.
var $ = function(id){

  return document.getElementById(id);
}


// The computer word selection should happen
// on setup(), so you can easly reset the game

var month = ["january", "febraury","march","april","may","june","july","august","september","october","november","december"]
var computerChoice = Math.floor(Math.random()*13);

// a better name would be `computerWord`
var answer = month[computerChoice];

var myLength = answer.length;
// this probably shoudl be just
// `var display = []`
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

    // a better name woulb be `userWord`
    userLetter=$("letters").value;
    $("letters").value="";

    // you do not need to loop through each letter
    for( var c=0; c< answer.length; c++)
    {

        if (userLetter.toLowerCase()== letters[c])
        {
            display[c] = userLetter.toLowerCase();
            win--;
        }
        output = output + display[c]+ " ";



    }



    document.getElementById("month").innerHTML = output;
    output="";
    attemptsLeft--;


    // Just compare the user word with the computer word
    // if (userWord.toLowerCase() === computerWord) you win
    if (win < 1)
    {document.getElementById("guesses").innerHTML = "YOU WIN !!!"}

    else if(attemptsLeft <1)

    {

      document.getElementById("guesses").innerHTML ="YOU LOSE!!!";

    }

    else {

        document.getElementById("guesses").innerHTML = " YOU HAVE "+ attemptsLeft + " GUESSES LEFT";
    }
  }
    window.onload = function()

    {
         setup();
         // submit is not an id... your button ID is `button`
         // Also you already using onclick on the HTML not need to do it here
         // But if you want to do it here, remove the onclick handler from the HTML
         // then `$("button").onclick = submit`
         // or a better way would be:
         // `$("button").addEventListener('click', submit)`
         // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
         $("submit").onclick= submit;

    }



