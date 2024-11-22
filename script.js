function convertTemp() {
    const tempInput = document.getElementById("tempInput").value;
    const unitInput = document.getElementById("unitInput").value;
    let resultText = '';

    if (tempInput === '') {
        alert("Please enter a temperature value!");
        return;
    }

    const temp = parseFloat(tempInput);
    let celsius, fahrenheit, kelvin;

    // Convert to Celsius
    if (unitInput === 'Fahrenheit') {
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;
        fahrenheit = temp;
    } else if (unitInput === 'Kelvin') {
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = temp;
    } else {
        celsius = temp;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    }

    resultText = `
        <p><strong>${fahrenheit.toFixed(2)} °F</strong></p>
        <p><strong>${celsius.toFixed(2)} °C</strong></p>
        <p><strong>${kelvin.toFixed(2)} K</strong></p>
    `;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultText;
    resultDiv.classList.add("show");
}
