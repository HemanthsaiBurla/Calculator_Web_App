function goBack() {
    window.location.href = "converter.html"; // Back to main converter
}

function convertMass() {
    let input = parseFloat(document.getElementById("massInput").value);
    let conversionType = document.getElementById("conversionType").value;
    let result = 0;

    if (!isNaN(input)) {
        switch (conversionType) {
            case "kg-g":
                result = input * 1000;
                break;
            case "g-kg":
                result = input / 1000;
                break;
            case "kg-lb":
                result = input * 2.20462;
                break;
            case "lb-kg":
                result = input / 2.20462;
                break;
            case "g-mg":
                result = input * 1000;
                break;
            case "mg-g":
                result = input / 1000;
                break;
        }
    }

    document.getElementById("massResult").textContent = result.toFixed(3);
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
    convertMass();
}

function appendNumber(num) {
    document.getElementById("massInput").value += num;
    convertMass();
}

function clearInput() {
    document.getElementById("massInput").value = "";
    document.getElementById("massResult").textContent = "0";
}
function appendDot() {
    let inputField = document.getElementById("massInput");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
    }
    convertMass();
}

function deleteLast() {
    let inputField = document.getElementById("massInput");
    inputField.value = inputField.value.slice(0, -1);
    convertMass();
}
