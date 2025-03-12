document.addEventListener("DOMContentLoaded", function () {
    convertTemperature();
});

function convertTemperature() {
    let inputVal = parseFloat(document.getElementById("input-screen").value) || 0;
    let conversionType = document.getElementById("conversionType").value;
    let outputVal = 0;

    switch (conversionType) {
        case "c-f": outputVal = (inputVal * 9/5) + 32; break;
        case "f-c": outputVal = (inputVal - 32) * 5/9; break;
    }

    document.getElementById("output-screen").textContent = outputVal.toFixed(2);
}

function switchConversion() {
    let conversionType = document.getElementById("conversionType");
    conversionType.selectedIndex = conversionType.selectedIndex === 0 ? 1 : 0;
    convertTemperature();
}




function appendNumber(number) {
    let inputField = document.getElementById("input-screen");
    if (inputField && inputField.tagName === "INPUT") {
        if (inputField.value === "0" && number !== ".") {
            inputField.value = number;
        } else {
            inputField.value += number;
        }
        convertTemperature();
    }
}




function appendDot() {
    let inputField = document.getElementById("input-screen");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
    }
}

function goBack() {
    window.location.href = "converter.html";
}

function backspace() {
    let inputField = document.getElementById("input-screen");
    inputField.value = inputField.value.slice(0, -1);
    if (inputField.value === "") inputField.value = "0";
    convertTemperature();
}

function clearScreen() {
    document.getElementById("input-screen").value = "0";
    document.getElementById("output-screen").textContent = "0";
}
