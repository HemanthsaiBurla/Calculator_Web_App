function goBack() {
    window.location.href = "converter.html"; 
}

function calculateDifference() {
    let fromDate = new Date(document.getElementById("fromDate").value);
    let toDate = new Date(document.getElementById("toDate").value);

    if (isNaN(fromDate) || isNaN(toDate)) return;

    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = toDate.getMonth() - fromDate.getMonth();
    let days = toDate.getDate() - fromDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(toDate.getFullYear(), toDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;

    document.getElementById("fromDateDisplay").innerText = fromDate.toDateString();
    document.getElementById("toDateDisplay").innerText = toDate.toDateString();
}
