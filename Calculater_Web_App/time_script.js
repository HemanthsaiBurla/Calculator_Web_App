function goBack() {
    window.location.href = "converter.html"; // Goes back to the main menu
}

function switchConversion() {
    let selectBox = document.getElementById("conversionType");
    let selectedIndex = selectBox.selectedIndex;
    let totalOptions = selectBox.options.length;

    if (selectedIndex < totalOptions - 1) {
        selectBox.selectedIndex += 1;
    } else {
        selectBox.selectedIndex = 0;
    }

    convertTime();
}

function appendNumber(num) {
    document.getElementById("time-input").value += num;
    convertTime(); // Auto convert
}

function appendDot() {
    let inputField = document.getElementById("time-input");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
    }
    convertTime();
}

function appendDecimal() {
    let inputField = document.getElementById("time-input");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
        convertTime(); // Auto convert
    }
}

function deleteLast() {
    let inputField = document.getElementById("time-input");
    inputField.value = inputField.value.slice(0, -1);
    convertTime(); // Auto convert
}

function clearInput() {
    document.getElementById("time-input").value = "";
    document.getElementById("time-result").textContent = "0";
}

function convertTime() {
    let input = parseFloat(document.getElementById("time-input").value) || 0;
    let conversionType = document.getElementById("conversionType").value;
    let result = 0;

    const conversionRates = {
        "sec-min": input / 60,
        "min-sec": input * 60,
        "min-hour": input / 60,
        "hour-min": input * 60,
        "hour-day": input / 24,
        "day-hour": input * 24
    };

    if (conversionRates[conversionType] !== undefined) {
        result = conversionRates[conversionType];
    }

    document.getElementById("time-result").textContent = result.toFixed(4);
}
