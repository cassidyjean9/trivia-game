$( document ).ready(function() {

    var correct = 0;
    var incorrect = 0;
    
    $("#results").hide();

    $(".submit").on("click", function() {
      event.preventDefault();
      $("#questions").hide();
      $("#timer-div").hide();
      $("#results").show();

      checkAnswers();
      console.log(correct, incorrect);
      

      $("#correct-text").text(correct);
      $("#incorrect-text").text(incorrect);
    });

    function checkAnswers(){
       var q1a = $("input[name='q1']:checked").val()
       if (q1a === "correct") {
         correct ++
       }
       else { 
         incorrect ++
       }

       var q2a = $("input[name='q2']:checked").val()
       if (q2a === "correct") {
         correct ++
       }
       else { 
         incorrect ++
       }

       var q3a = $("input[name='q3']:checked").val()
       if (q3a === "correct") {
         correct ++
       }
       else { 
         incorrect ++
       }




  }
    //timer info
    var time = 90;
    var intervalId = setInterval (count, 1000);

    if (time === 0) {
        clearInterval(intervalId);

        $("#questions").hide();
        $("#timer-div").hide();
        $("#results").show();
      
        checkAnswers();
        console.log(correct, incorrect);
      

        $("#correct-text").text(correct);
        $("#incorrect-text").text(incorrect);
    }
    function count() {
        time --;
        var converted = timeConverter(time);
        $("#time").text(converted);
        if (time === 0) {
          clearInterval(intervalId);
  
          $("#questions").hide();
          $("#timer-div").hide();
          $("#results").show();
        
          checkAnswers();
          console.log(correct, incorrect);
        
  
          $("#correct-text").text(correct);
          $("#incorrect-text").text(incorrect);
      }

    }


    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }





});