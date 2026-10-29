const input = document.getElementById("input");

function print(num) {
    input.value += num;
}

function clearInput() {  
    input.value = '';
}

function calculate() {
    try {
        input.value = eval(input.value);
    }
    catch(error) {
        input.value = "Error";
    }
}