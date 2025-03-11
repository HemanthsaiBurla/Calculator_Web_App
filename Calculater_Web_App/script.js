document.addEventListener("DOMContentLoaded", () => { 
    const screen = document.getElementById("screen");
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll("button");
    const historyBox = document.getElementById("history-box");
    const historyBtn = document.getElementById("history-btn");
    const clearHistoryBtn = document.getElementById("clear-history-btn");
    const backspaceBtn = document.getElementById("backspace");

    let currentInput = "";
    let history = [];

    clearHistoryBtn.style.display = "none"; // Hide clear history button initially

    // ✅ Set initial screen value to "0"
    screen.value = "0";  

    function updateScreen(value) {
        screen.value = value.replace(/\*/g, "×") || "0"; // Show "0" if empty
    }

    function updateTotal() {
        try {
            let result = eval(currentInput.replace(/×/g, "*")); // Convert × to * for eval
            resultDisplay.textContent = !isNaN(result) && result !== undefined ? `= ${result}` : "= Total";
        } catch {
            resultDisplay.textContent = "= Error";
        }
    }

    function handleNumber(value) {
        if (screen.value === "0") currentInput = ""; // Remove leading zero
        currentInput += value;
        updateScreen(currentInput);
        updateTotal();
    }

    function handleOperator(value) {
        if (value === "×") value = "*"; // Convert × to *
        if (currentInput === "" || /[+\-*/]$/.test(currentInput)) return;
        currentInput += value;
        updateScreen(currentInput);
    }

    function calculateFinalResult() {
        try {
            let result = eval(currentInput.replace(/×/g, "*"));
            if (result === undefined || isNaN(result)) return;

            history.unshift(`${currentInput.replace(/\*/g, "×")} = ${result}`);
            if (history.length > 5) history.pop();

            currentInput = result.toString();
            updateScreen(currentInput);
            updateTotal();
        } catch {
            updateScreen("Error");
        }
    }

    function clearCalculator() {
        currentInput = "";
        updateScreen("0");  // ✅ Keep "0" after clearing
        resultDisplay.textContent = "= Total";
    }

    function toggleHistory() {
        if (historyBox.style.display === "none" || historyBox.style.display === "") {
            historyBox.innerHTML = history.length 
                ? history.map(entry => `<div>${entry}</div>`).join("") 
                : "<div>No history</div>";
            historyBox.style.display = "block";
            clearHistoryBtn.style.display = history.length ? "block" : "none"; 
        } else {
            historyBox.style.display = "none";
            clearHistoryBtn.style.display = "none";
        }
    }

    function clearHistory() {
        history = [];
        historyBox.innerHTML = "<div>No history</div>";
        clearHistoryBtn.style.display = "none"; 
    }

    function handleBackspace() {
        currentInput = currentInput.slice(0, -1);
        updateScreen(currentInput || "0"); // ✅ Prevents empty screen
        updateTotal();
    }

    function handlePercentage() {
        if (currentInput === "") return;
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateScreen(currentInput);
        updateTotal();
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value || button.innerText;

            if (!isNaN(value) || value === ".") {
                handleNumber(value);
            } else if (["+", "-", "*", "/", "%", "×"].includes(value)) {
                if (value === "%") {
                    handlePercentage();
                } else {
                    handleOperator(value);
                }
            } else if (value === "=") {
                calculateFinalResult();
            } else if (value === "AC") {
                clearCalculator();
            }
        });
    });

    backspaceBtn.addEventListener("click", handleBackspace);
    historyBtn.addEventListener("click", toggleHistory);
    clearHistoryBtn.addEventListener("click", clearHistory);
});
