// Select Display

const display = document.getElementById("display");

// Append Values To Display

function appendValue(value){

  display.value += value;

}

// Clear Entire Display

function clearDisplay(){

  display.value = "";

}

// Delete Last Character

function deleteLast(){

  display.value = display.value.slice(0, -1);

}

// Calculate Result

function calculate(){

  try{

    display.value = eval(display.value);

  }

  catch(error){

    display.value = "Error";

  }

}

// Keyboard Support

document.addEventListener("keydown", function(event){

  const key = event.key;

  // Numbers

  if(
    key >= "0" && key <= "9"
  ){

    appendValue(key);

  }

  // Operators

  else if(
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ){

    appendValue(key);

  }

  // Enter Key

  else if(key === "Enter"){

    calculate();

  }

  // Backspace Key

  else if(key === "Backspace"){

    deleteLast();

  }

  // Escape Key

  else if(key === "Escape"){

    clearDisplay();

  }

});

// Welcome Message

window.onload = function(){

  console.log("Calculator Loaded Successfully");

};

// Button Click Animation

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", function(){

    button.style.transform = "scale(0.9)";

    setTimeout(() => {

      button.style.transform = "scale(1)";

    },100);

  });

});