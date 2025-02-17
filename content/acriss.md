---
title: "ACRISS Car Codes"
---

<style>
table, tr, td {
    border: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.5));
    border-collapse: collapse;
}

td {
    padding: 0.25rem 0.5rem;

    &.highlight {
        background: yellow;
        color: rgba(0, 0, 0, 0.95);
    }
}

table {
    width: 1200px;
    max-width: 95vw;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    font-family: monospace;
}

tr:nth-child(2n) {
    background: light-dark(rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.15));
}

input {
    padding: 0.25rem;
    width: 100%;
    margin-bottom: 2rem;
}

</style>

This is a mirror of the data on https://acriss.org/car-codes/, since it's too slow of a site for my tastes.

<input type="text" id="decode" placeholder="Enter an ACRISS code to decode" maxlength="4"/>

<table>
    <thead>
        <tr>
            <th>CATEGORY</th>
            <th>TYPE</th>
            <th>TRANSMISSION / DRIVE</th>
            <th>FUEL/AIR COND.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td id="CATEGORY_M">M - Mini</td>
            <td id="TYPE_B">B - 2-3 Door</td>
            <td id="TRANSMISSION_M">M - Manual Unspecified Drive</td>
            <td id="FUEL_R">R - Unspecified Fuel/Power With Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_N">N - Mini Elite</td>
            <td id="TYPE_C">C - 2/4 Door</td>
            <td id="TRANSMISSION_N">N - Manual 4WD</td>
            <td id="FUEL_N">N - Unspecified Fuel/Power Without Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_E">E - Economy</td>
            <td id="TYPE_D">D - 4-5 Door</td>
            <td id="TRANSMISSION_C">C - Manual AWD</td>
            <td id="FUEL_D">D - Diesel Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_H">H - Economy Elite</td>
            <td id="TYPE_W">W - Wagon/Estate</td>
            <td id="TRANSMISSION_A">A - Auto Unspecified Drive</td>
            <td id="FUEL_Q">Q - Diesel No Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_C">C - Compact</td>
            <td id="TYPE_V">V - Passenger Van</td>
            <td id="TRANSMISSION_B">B - Auto 4WD</td>
            <td id="FUEL_H">H - Hybrid</td>
        </tr>
        <tr>
            <td id="CATEGORY_D">D - Compact Elite</td>
            <td id="TYPE_L">L - Limousine/Sedan</td>
            <td id="TRANSMISSION_D">D - Auto AWD</td>
            <td id="FUEL_I">I - Hybrid Plug in</td>
        </tr>
        <tr>
            <td id="CATEGORY_I">I - Intermediate</td>
            <td id="TYPE_S">S - Sport</td>
            <td></td>
            <td id="FUEL_E">E - Electric</td>
        </tr>
        <tr>
            <td id="CATEGORY_J">J - Intermediate Elite</td>
            <td id="TYPE_T">T - Convertible</td>
            <td></td>
            <td id="FUEL_C">C - Electric</td>
        </tr>
        <tr>
            <td id="CATEGORY_S">S - Standard</td>
            <td id="TYPE_F">F - SUV</td>
            <td></td>
            <td id="FUEL_L">L - LPG/Compressed Gas Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_R">R - Standard Elite</td>
            <td id="TYPE_J">J - Open Air All Terrain</td>
            <td></td>
            <td id="FUEL_S">S - LPG/Compressed Gas No Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_F">F - Fullsize</td>
            <td id="TYPE_X">X - Special</td>
            <td></td>
            <td id="FUEL_A">A - Hydrogen Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_G">G - Fullsize Elite</td>
            <td id="TYPE_P">P - Pick up (single/extended cab) 2 door</td>
            <td></td>
            <td id="FUEL_B">B - Hydrogen No Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_P">P - Premium</td>
            <td id="TYPE_Q">Q - Pick up (double cab) 4 door</td>
            <td></td>
            <td id="FUEL_M">M - Multi Fuel/Power Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_U">U - Premium Elite</td>
            <td id="TYPE_Z">Z - Special Offer Car</td>
            <td></td>
            <td id="FUEL_F">F - Multi fuel/power No Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_L">L - Luxury</td>
            <td id="TYPE_E">E - Coupe</td>
            <td></td>
            <td id="FUEL_V">V - Petrol Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_W">W - Luxury Elite</td>
            <td id="TYPE_M">M - Monospace</td>
            <td></td>
            <td id="FUEL_Z">Z - Petrol No Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_O">O - Oversize</td>
            <td id="TYPE_R">R - Recreational Vehicle</td>
            <td></td>
            <td id="FUEL_U">U - Ethanol Air</td>
        </tr>
        <tr>
            <td id="CATEGORY_X">X - Special</td>
            <td id="TYPE_H">H - Motor Home</td>
            <td></td>
            <td id="FUEL_X">X - Ethanol No Air</td>
        </tr>
        <tr>
            <td></td>
            <td id="TYPE_Y">Y - 2 Wheel Vehicle</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td id="TYPE_N">N - Roadster</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td id="TYPE_G">G - Crossover</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td id="TYPE_K">K - Commercial Van/Truck</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


<script>
document.querySelector("input#decode").onkeyup = function(e) {
    const code = e.target.value
    document.querySelectorAll("td").forEach(elem => elem.classList.remove("highlight"));
    if (code.length > 0) {
        const category = code[0].toUpperCase();
        document.querySelector(`td#CATEGORY_${category}`).classList.add("highlight");
    }
    if (code.length > 1) {
        const type = code[1].toUpperCase();
        document.querySelector(`td#TYPE_${type}`).classList.add("highlight");
    }
    if (code.length > 2) {
        const transmission = code[2].toUpperCase();
        document.querySelector(`td#TRANSMISSION_${transmission}`).classList.add("highlight");
    }
    if (code.length > 3) {
        const fuel = code[3].toUpperCase();
        document.querySelector(`td#FUEL_${fuel}`).classList.add("highlight");
    }

}
</script>

