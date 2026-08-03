---
title: "ACRISS Car Codes"
wide: true
---

<style>
/* Scoped to .prose so these win over the site's markdown table styles, which
   assume a borderless table sitting in a column of running text. */
.prose table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
}

.prose th,
.prose tr > td,
.prose tr > th:first-child,
.prose tr > td:first-child {
    padding: 0.4rem 0.6rem;
}

.prose td {
    border: 1px solid var(--rule-strong);
    vertical-align: top;

    &.highlight {
        background: var(--accent);
        color: var(--paper);
    }
}

.prose tr:nth-child(2n) td {
    background: var(--panel);
}

.prose tr:nth-child(2n) td.highlight {
    background: var(--accent);
}

input {
    width: 100%;
    max-width: 20rem;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--rule-strong);
    border-radius: 3px;
    background: var(--panel);
    color: var(--ink);
    font: inherit;
    font-size: 0.9375rem;
}

input:focus-visible {
    border-color: var(--accent);
}
</style>

This is a mirror of the data on https://acriss.org/car-codes/, since it's too slow of a site for my tastes.

<input type="text" id="decode" placeholder="Enter an ACRISS code to decode" maxlength="4"/>

<div class="scroll-x">
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
            <td id="FUEL_R">R - Unspecified Fuel, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_N">N - Mini Elite</td>
            <td id="TYPE_C">C - 2/4 Door</td>
            <td id="TRANSMISSION_N">N - Manual 4WD</td>
            <td id="FUEL_N">N - Unspecified Fuel, no AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_E">E - Economy</td>
            <td id="TYPE_D">D - 4-5 Door</td>
            <td id="TRANSMISSION_C">C - Manual AWD</td>
            <td id="FUEL_D">D - Diesel, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_H">H - Economy Elite</td>
            <td id="TYPE_W">W - Wagon/Estate</td>
            <td id="TRANSMISSION_A">A - Auto Unspecified Drive</td>
            <td id="FUEL_Q">Q - Diesel, no AC</td>
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
            <td id="TRANSMISSION_Q">Q - Level 3 Conditional Automation</td>
            <td id="FUEL_E">E - Electric</td>
        </tr>
        <tr>
            <td id="CATEGORY_J">J - Intermediate Elite</td>
            <td id="TYPE_T">T - Convertible</td>
            <td id="TRANSMISSION_H">H - Level 4 High Automation</td>
            <td id="FUEL_C">C - Electric</td>
        </tr>
        <tr>
            <td id="CATEGORY_S">S - Standard</td>
            <td id="TYPE_F">F - SUV</td>
            <td id="TRANSMISSION_F">F - Level 5 Full Automation</td>
            <td id="FUEL_L">L - LPG/CNG, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_R">R - Standard Elite</td>
            <td id="TYPE_J">J - Open Air All Terrain</td>
            <td></td>
            <td id="FUEL_S">S - LPG/CNG, no AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_F">F - Fullsize</td>
            <td id="TYPE_X">X - Special</td>
            <td></td>
            <td id="FUEL_A">A - Hydrogen, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_G">G - Fullsize Elite</td>
            <td id="TYPE_P">P - Pick up, 2 door</td>
            <td></td>
            <td id="FUEL_B">B - Hydrogen, no AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_P">P - Premium</td>
            <td id="TYPE_Q">Q - Pick up, 4 door</td>
            <td></td>
            <td id="FUEL_M">M - Multi Fuel, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_U">U - Premium Elite</td>
            <td id="TYPE_Z">Z - Special Offer Car</td>
            <td></td>
            <td id="FUEL_F">F - Multi Fuel, no AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_L">L - Luxury</td>
            <td id="TYPE_E">E - Coupe</td>
            <td></td>
            <td id="FUEL_V">V - Petrol, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_W">W - Luxury Elite</td>
            <td id="TYPE_M">M - Monospace</td>
            <td></td>
            <td id="FUEL_Z">Z - Petrol, no AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_O">O - Oversize</td>
            <td id="TYPE_R">R - Recreational Vehicle</td>
            <td></td>
            <td id="FUEL_U">U - Ethanol, AC</td>
        </tr>
        <tr>
            <td id="CATEGORY_X">X - Special</td>
            <td id="TYPE_H">H - Motor Home</td>
            <td></td>
            <td id="FUEL_X">X - Ethanol, no AC</td>
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
</div>


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
