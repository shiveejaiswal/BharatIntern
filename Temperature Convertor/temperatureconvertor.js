function convertToFar() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerHTML = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid temperature.";
    }
}

document.getElementById("convertBtn").addEventListener("click", convertToFar);
