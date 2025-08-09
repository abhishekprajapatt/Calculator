const display = document.getElementById("display");

function addCharToDisplay(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        
        if (result === undefined || result === null || isNaN(result)) {
            display.value = "Error";
        } 
        
        else {
            display.value = result;
        }
    } 
    
    catch (error) {
        display.value = "Error";
    }
}