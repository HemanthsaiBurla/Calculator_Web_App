function goBack() {
    window.location.href = "converter.html"; // Back to main converter
}

function convertSpeed() {
    let input = parseFloat(document.getElementById("speedInput").value);
    let conversionType = document.getElementById("conversionType").value;
    let result = 0;

    if (!isNaN(input)) {
        switch (conversionType) {
            case "kmh-ms":
                result = input / 3.6;
                break;
            case "ms-kmh":
                result = input * 3.6;
                break;
            case "mph-kmh":
                result = input * 1.609;
                break;
            case "kmh-mph":
                result = input / 1.609;
                break;
            case "knots-kmh":
                result = input * 1.852;
                break;
            case "kmh-knots":
                result = input / 1.852;
                break;
        }
    }

    document.getElementById("speedResult").textContent = result.toFixed(3);
}

function switchConversion() {
    let selectBox = document.getElementById("conversionType");
    let selectedIndex = selectBox.selectedIndex;
    let options = selectBox.options;

    if (selectedIndex % 2 === 0) {
        selectBox.selectedIndex = selectedIndex + 1;
    } else {
        selectBox.selectedIndex = selectedIndex - 1;
    }
    convertSpeed();
}

function appendNumber(num) {
    document.getElementById("speedInput").value += num;
    convertSpeed();
}

function clearInput() {
    document.getElementById("speedInput").value = "";
    document.getElementById("speedResult").textContent = "0";
}

function appendDot() {
    let inputField = document.getElementById("speedInput");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
    }
    convertSpeed();
}

function deleteLast() {
    let inputField = document.getElementById("speedInput");
    inputField.value = inputField.value.slice(0, -1);
    convertSpeed();
}
