let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        // Clear Display

        if(value === "AC"){
            display.value = "";
        }

        // Delete Last Character

        else if(value === "DEL"){
            display.value = display.value.slice(0,-1);
        }

        // Calculate Result

        else if(value === "="){

            try{
                display.value = eval(display.value);
            }

            catch{
                display.value = "Error";
            }

        }

        // Add Values

        else{
            display.value += value;
        }

    });

});
