var playing = false;
var score;
var timeremaining;
var correctAnswer;
//if we'clicked on the start/reset
  document.getElementById("startreset").onclick =
  function (){
     //if we are playing
      if(playing == true){

          location.reload();//reload game
      }else{
           // change mode to playing
          playing = true;

          score = 0;
        
          document.getElementById("scorevalue").innerHTML = score;
          //show countdown box
               show("timeremaining")
               timeremaining = 60;

            
               document.getElementById("timeremainingvalue").innerHTML = timeremaining
                  hide("gameover");
          
               //change button to reset

                    
           document.getElementById("startreset").innerHTML = "Reset Game";
    

           //start countdown

           startCountdown();

           generateQA();
        }
        
    
  }
    








for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = 
    function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                score++ ;
                document.getElementById("scorevalue").innerHTML
                =  score;
 
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
 
                generateQA();
         }else{
              hide("correct");
              show("wrong");
              setTimeout(function(){
                 hide("wrong");
             }, 1000);
 
            }
 
        }
    }

}
   //function

   //counting
  function startCountdown(){
      action = setInterval(function(){
  timeremaining -= 1;
  document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            //game over 
         stopCountdown();
         show("gameover");

         document.getElementById("gameover").innerHTML = 
       "<p>Game Over!</p><p>Your score is" +  score  + ",  </p>"
                        hide("timeremaining");
                        hide("correct");
                        hide("wrong");
                        playing = false;


        document.getElementById("startreset").innerHTML ="start Game"

           
    }
      },1000);
  }
 
  //stop the counting
  function stopCountdown(){
    clearInterval(action);
  }
  
  function hide(id){
       document.getElementById(id).style.display = "none";
     }

     function show(id){
      document.getElementById(id).style.display = "block";
      }

      function generateQA(){
          var x = 1+ Math.round(9*Math.random());
          var y = 1+ Math.round(9*Math.random());
            correctAnswer = x*y;

          document.getElementById("question").innerHTML = 
          x + "x" + y;
          var correctPosition = 1+ 
          Math.round(3*Math.random());
         
          document.getElementById("box"+correctPosition).
          innerHTML = correctAnswer;
       //fill one box with correct
     
        var answers =[correctAnswer]; 


       for(i=1; i<5; i++){
          if(i != correctPosition) {
               var wrongAnswer;
               do{
                                   wrongAnswer = (1+
                    Math.round(9*Math.random()))*(1+
                    Math.round(9*Math.random())); //wrong answer
                       }while(answers.indexOf(wrongAnswer)>-1)
               
                 document.getElementById("box"+i).innerHTML = wrongAnswer;
                        answers.push(wrongAnswer);
          }
       }
      }

//if we are not playing
//show countdown box
//reducwe time



             //timeleft?
               //yes=> continue
               //no=>gameover
               //change button to reset
               //generate new q&a



//if we click on answer box
  //if we are playing
     //correct
        //yes
           //increase score
           //show correct box
           //generate new Q&A
        //no
           //show try again box for isec


