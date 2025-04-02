
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');


const batteryImage = document.createElement("img");
batteryImage.alt = "Battery Status Image";
document.body.appendChild(batteryImage);


function updateBatteryStatus(battery) {
    console.log(battery);

   
    chargeStatus.textContent = battery.charging ? "Charging..." : "Discharging";

   
    let batteryPercentage = Math.round(battery.level * 100);
    chargeLevel.textContent = batteryPercentage + "%";
    chargeMeter.value = batteryPercentage;

    
    batteryImage.src = `https://robohash.org/100percent.png`;
}

navigator.getBattery().then(battery => {
    updateBatteryStatus(battery);

    
    battery.addEventListener("chargingchange", () => updateBatteryStatus(battery));
    battery.addEventListener("levelchange", () => updateBatteryStatus(battery));
});
