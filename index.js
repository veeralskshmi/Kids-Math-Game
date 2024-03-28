const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

var answer = 0;

function generate_equation()
{
   var num1 = Math.floor(Math.random()*13);
   var num2 = Math.floor(Math.random()*13);

   var dummyAnswer1 = Math.floor(Math.random()*13);
   var dummyAnswer2 = Math.floor(Math.random()*13);

   var allAnswers = [];
   var SwitchAnswers = [];
    

   answer = num1+num2;

   document.getElementById("num1").innerHTML = num1;
   document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for(i= allAnswers.lenngth; i--;){
    SwitchAnswers.push(allAnswers.splice(Matth.floor(Math.random()*(i+1)),1) [0]);
  }


   option1.innerHTML=answer;
   option2.innerHTML=dummyAnswer1;
   option3.innerHTML=dummyAnswer2;



}




option1.addEventListener("click", function()
{
  if(option1.innerHTML == answer)
  {
    generate_equation();

  }
  else{
    error();
  }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        generate_equation();

    }
    else{
        error();
    }
});

option3.addEventListener("click", function()
{
  if(option3.innerHTML == answer)
  {
    generate_equation();

  }
  else{
    error();
  }
});


generate_equation();
