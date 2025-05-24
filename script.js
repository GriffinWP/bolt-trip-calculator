document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const income = parseFloat(document.getElementById("targetIncome").value);
    const period = document.getElementById("period").value;
    const drivingDays = parseFloat(document.getElementById("drivingDays").value);
    const distance = parseFloat(document.getElementById("tripDistance").value);
    const fare = parseFloat(document.getElementById("farePerTrip").value);
    const commissionPercent = parseFloat(document.getElementById("boltCommission").value) / 100;
    const fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    const fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
    const maintenancePerKm = parseFloat(document.getElementById("maintenanceCost").value);

    const fuelCostPerTrip = (distance * fuelConsumption / 100) * fuelPrice;
    const maintenanceCostPerTrip = distance * maintenancePerKm;
    const commission = fare * commissionPercent;
    const netPerTrip = fare - commission - fuelCostPerTrip - maintenanceCostPerTrip;

    let days = period === "day" ? 1 : period === "week" ? drivingDays : drivingDays * 4;
    let totalTrips = Math.ceil(income / (netPerTrip * days));

    let dailyTrips = totalTrips;
    let weeklyTrips = totalTrips * drivingDays;
    let monthlyTrips = totalTrips * drivingDays * 4;

    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p><strong>Trips per day:</strong> ${dailyTrips}</p>
        <p><strong>Trips per week:</strong> ${weeklyTrips}</p>
        <p><strong>Trips per month:</strong> ${monthlyTrips}</p>
        <p><strong>Net income per trip:</strong> ZAR ${netPerTrip.toFixed(2)}</p>
    `;
});
