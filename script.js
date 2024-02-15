const calculateButton = document.getElementById("calculate");
const itemSelect = document.getElementById("item-select");
const quantityInput = document.getElementById("quantity");
const material1Span = document.getElementById("material1");
const material2Span = document.getElementById("material2");
const material3Span = document.getElementById("material3");
const debug = document.getElementById("debug");

// Database of items
const items = [
    {
        name: "Sword",
        material1: 5,
        material2: 3,
        material3: 1
    },
   {
        name: "Shield",
        material1: 3,
        material2: 2,
        material3: 1
     },
   {
        name: "Armor",
        material1: 8,
        material2: 6,
        material3: 2
    }
];

// Populate the dropdown menu with the items in the database
items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name.toLowerCase();
    option.textContent = item.name;
    itemSelect.appendChild(option);
});

calculateButton.addEventListener("click", () => {
    debug.textContent = "Button clicked!";
    let itemName = itemSelect.value.toUpperCase();
    const quantity = parseInt(quantityInput.value);

    // Find the item in the database
    const item = items.find(i => i.name.toLowerCase() === itemName.toLowerCase());

    if (!item) {
        alert("Item not found in database.");
        return;
    }

    // Convert itemName to lowercase
    itemName = itemName.toLowerCase();

    // Materials needed to craft the item
    let material1 = item.material1;
    let material2 = item.material2;
    let material3 = item.material3;

    // Example: If the item name is "sword", then the materials needed are doubled
    if (itemName === "sword"){
        material1 *= 2;
        material2 *= 2;
        material3 *= 2;
    }

    // Display the results
    material1Span.textContent = `${material1} x Material 1`;
    material2Span.textContent = `${material2} x Material 2`;
    material3Span.textContent = `${material3} x Material 3`;

    // Calculate the total amount of materials needed
    const totalMaterial1 = material1 * quantity;
    const totalMaterial2 = material2 * quantity;
    const totalMaterial3 = material3 * quantity;

    // Display the total amount of materials needed
    material1Span.textContent += ` (Total: ${totalMaterial1})`;
    material2Span.textContent += ` (Total: ${totalMaterial2})`;
    material3Span.textContent += ` (Total: ${totalMaterial3})`;
});