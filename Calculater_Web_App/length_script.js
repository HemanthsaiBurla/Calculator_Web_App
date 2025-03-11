document.addEventListener("DOMContentLoaded", function () {
    convertLength();
});

function convertLength() {
    let inputVal = parseFloat(document.getElementById("input-screen").value) || 0;
    let conversionType = document.getElementById("conversionType").value;
    let outputVal = 0;

    switch (conversionType) {
        case "cm-mm": outputVal = inputVal * 10; break;
        case "mm-cm": outputVal = inputVal / 10; break;
        case "mm-m": outputVal = inputVal / 1000; break;
        case "m-mm": outputVal = inputVal * 1000; break;
        case "m-km": outputVal = inputVal / 1000; break;
        case "km-m": outputVal = inputVal * 1000; break;
    }

    document.getElementById("output-screen").textContent = outputVal;
}

function switchConversion() {
    let conversionType = document.getElementById("conversionType");
    let index = conversionType.selectedIndex;

    conversionType.selectedIndex = (index % 2 === 0) ? index + 1 : index - 1;

    convertLength();
}

function appendNumber(number) {
    let inputField = document.getElementById("input-screen");
    if (inputField.value === "0") {
        inputField.value = number;
    } else {
        inputField.value += number;
    }
    convertLength();
}

function appendDot() {
    let inputField = document.getElementById("input-screen");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
    }
}

        function goBack() {
            window.location.href = "converter.html"; // Ensure index.html is in the same directory
        }
    
       
function backspace() {
    let inputField = document.getElementById("input-screen");
    inputField.value = inputField.value.slice(0, -1);
    if (inputField.value === "") inputField.value = "0";
    convertLength();
}

function clearScreen() {
    document.getElementById("input-screen").value = "0";
    document.getElementById("output-screen").textContent = "0";
}
