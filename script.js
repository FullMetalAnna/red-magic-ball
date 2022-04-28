var redAsnswares = [
    "Yes – definitely",
    "My answer is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Yyou already know the answer",
    "Better not tell you now",
    "No",
    "Concentrate and ask again",
    "You may rely on it",
    "As I see it, yes",
    "I don't think so",
    "It is decidedly so",
    "Without a doubt",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Doubtful"
  ];
 
  //function
  function myFunction() {
    var mojeIme = document.getElementById('ddd').value;
    var pitanje = document.getElementById('ccc').value;
    let broj = document.getElementById('number');
   
   if (mojeIme.length < 1 || pitanje.length < 1) {
    swal("Ener your name", "And choose question wisely");
  } else {
      document.getElementById('text1').innerHTML = mojeIme + ' would like to know: ' + pitanje;
      broj.innerText = "";
      var num = pitanje.length % redAsnswares.length;
      answer.innerText =  redAsnswares[num];
    }
  }
  
