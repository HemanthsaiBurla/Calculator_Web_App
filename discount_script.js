document.addEventListener("DOMContentLoaded", function () {
    calculateDiscount();
});

// Keep track of the active input field
let activeInput = document.getElementById("original-price");

// Detect clicks on input fields
document.getElementById("original-price").addEventListener("focus", function () {
    activeInput = this;
});
document.getElementById("discount-percent").addEventListener("focus", function () {
    activeInput = this;
});

function calculateDiscount() {
    let originalPrice = parseFloat(document.getElementById("original-price").value) || 0;
    let discountPercent = parseFloat(document.getElementById("discount-percent").value) || 0;
    
    let discountAmount = (originalPrice * discountPercent) / 100;
    let finalPrice = originalPrice - discountAmount;

    document.getElementById("final-price").textContent = finalPrice.toFixed(2);
    document.getElementById("you-save-text").textContent = `You save ₹${discountAmount.toFixed(2)}`;
}



// function appendNumber(number) {
//     if (activeInput && activeInput.tagName === "INPUT") {
//         if (activeInput.value === "0" && number !== "." && number !== "00") {
//             activeInput.value = number;
//         } else {
//             activeInput.value += number;
//         }
//         calculateDiscount();
//     }
// }

function appendNumber(number) {
    if (activeInput && activeInput.tagName === "INPUT") {
        // If current value is "0", replace it only if number is not "00"
        if (activeInput.value === "0" && number !== ".") {
            activeInput.value = number;
        } else {
            activeInput.value += number;
        }
        calculateDiscount();
    }
}





function appendDot() {
    if (activeInput && activeInput.tagName === "INPUT" && !activeInput.value.includes(".")) {
        activeInput.value += ".";
    }
}

function goBack() {
    window.location.href = "converter.html";
}

function backspace() {
    if (activeInput && activeInput.tagName === "INPUT") {
        activeInput.value = activeInput.value.slice(0, -1);
        if (activeInput.value === "") activeInput.value = "0";
        calculateDiscount();
    }
}

function clearScreen() {
    document.getElementById("original-price").value = "0";
    document.getElementById("discount-percent").value = "0";
    document.getElementById("final-price").textContent = "0";
    document.getElementById("you-save-text").textContent = "You save ₹0";
}
