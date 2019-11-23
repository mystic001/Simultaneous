function completeSimultaneous(){

    // Declaration of all the variable we need to carryout all the operations
      var x , y;
      var A = Number (document.getElementById("first").value.trim());
      var ope =(document.getElementById("operatorone").value.trim());
      var B = Number (document.getElementById("second").value.trim());
      var C = Number (document.getElementById("constantC").value.trim());

      var D = Number (document.getElementById("third").value.trim());
      var ope1 = document.getElementById("operatortwo").value.trim();
      var E = Number (document.getElementById("fourth").value.trim());
      var F = Number (document.getElementById("constantF").value.trim());


      var x1 = document.getElementById("answer1");
      var x2 = document.getElementById("answer2");

      /*This block of codes were arrived at after considering each possible conditions for our
      simultaneous equation and them making x and y subject of the formula individually*/



// this block of code checks for the operators
      if(ope === '-' && ope1 === '+'){
      x = ( (C*E*A) +  (B*F*A) ) / ( A * ( (D*B) + (E * A) ) );
      y = ( ((F*A)-(D*C))/((E*A)+(D*B)) );
      x1.value = Number (x).toFixed(2);
      x2.value = Number (y).toFixed(2);
      console.log("we are in loop one")

    }
//Likewise this checks for the opeartors too the console is meant for debugging;
    if ( ope === '+' && ope1 === '-'){
      x = ( (B*F*A) + (C*E*A) )/ (A * ( (D*B) + (E*A) ) );
      y = ( (D*C)-(F*A) ) /( (D*B)+(E*A) );
      x1.value = Number (x).toFixed(2);
      x2.value = Number (y).toFixed(2);
      console.log("we are in loop two");
      alert((F*A));
      console.log((B*F*A));
      console.log(C*E*A);
      console.log((E*A));
      console.log((D*B));
    }


     else if ( ope === '+' && ope1 === '+'){
      x = ( (C*E*A) - (B*F*A) )/ (A * ( (E*A)-(D*B) ) );
      y = ((F*A) - (D*C))/((E*A)-(D*B));
      x1.value = Number (x).toFixed(2);
      x2.value = Number (y).toFixed(2);
      console.log("we are in third loop");

    }

    else if ( ope === '-' && ope1 === '-'){
      x =( (B*F*A) - (E*A*C)  ) / (A *( (D*B)-(E*A) ) )
      y = ( ((F*A)-(D*C)) )/( (D*B)-(E*A) );
      x1.value = Number (x).toFixed(2);
      x2.value = Number (y).toFixed(2);
      console.log("we are in fourth loop");
    }

    else{
      let G;
      G = "Please enter the right values"
      document.getElementById("demo").innerHTML= G;
    }






      }

