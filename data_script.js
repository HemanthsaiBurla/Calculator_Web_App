function goBack() {
    window.location.href = "converter.html"; // Back to main converter
}

function convertData() {
    let input = parseFloat(document.getElementById("dataInput").value);
    let conversionType = document.getElementById("conversionType").value;
    let result = 0;

    if (!isNaN(input)) {
        switch (conversionType) {
            case "byte-kb":
                result = input / 1024;
                break;
            case "kb-byte":
                result = input * 1024;
                break;
            case "kb-mb":
                result = input / 1024;
                break;
            case "mb-kb":
                result = input * 1024;
                break;
            case "mb-gb":
                result = input / 1024;
                break;
            case "gb-mb":
                result = input * 1024;
                break;
            case "gb-tb":
                result = input / 1024;
                break;
            case "tb-gb":
                result = input * 1024;
                break;
            case "tb-pb":
                result = input / 1024;
                break;
            case "pb-tb":
                result = input * 1024;
                break;
        }
    }

    document.getElementById("dataResult").textContent = result.toFixed(3);
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
    convertData();
}

function appendNumber(num) {
    document.getElementById("dataInput").value += num;
    convertData();
}

function appendDot() {
    let inputField = document.getElementById("dataInput");
    if (!inputField.value.includes(".")) {
        inputField.value += ".";
    }
    convertData();
}
function clearInput() {
    document.getElementById("dataInput").value = "";
    document.getElementById("dataResult").textContent = "0";
}

function deleteLast() {
    let inputField = document.getElementById("dataInput");
    inputField.value = inputField.value.slice(0, -1);
    convertData();
}
