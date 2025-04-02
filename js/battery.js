/* Variables */
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');

// Create an image element for displaying the battery image
const batteryImage = document.createElement("img");
batteryImage.alt = "Battery Status Image";
batteryImage.style.display = "block"; // Ensures it's visible
batteryImage.style.marginTop = "20px"; // Adds spacing
document.body.appendChild(batteryImage);

/* Function to update battery status */
function updateBatteryStatus(battery) {
    console.log(battery);

    // Update charging status
    chargeStatus.textContent = battery.charging ? "Charging..." : "Discharging";

    // Update charge level
    let batteryPercentage = Math.round(battery.level * 100);
    chargeLevel.textContent = batteryPercentage + "%";
    chargeMeter.value = batteryPercentage;

    // Update the image using the RoboHash API
    batteryImage.src = `https://robohash.org/${batteryPercentage}.png`;
}

/* Get battery information and update dynamically */
navigator.getBattery().then(battery => {
    updateBatteryStatus(battery);

    // Listen for changes in charging status and battery level
    battery.addEventListener("chargingchange", () => updateBatteryStatus(battery));
    battery.addEventListener("levelchange", () => updateBatteryStatus(battery));
});
