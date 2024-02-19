document.addEventListener("DOMContentLoaded", function() {
    const itemSelect = document.getElementById("item-select");
    const quantityInput = document.getElementById("quantity");

    // Material spans
    const materialSpans = [
        document.getElementById("material1"),
        document.getElementById("material2"),
        document.getElementById("material3"),
        document.getElementById("material4"),
        document.getElementById("material5"),
        document.getElementById("material6"),
        document.getElementById("material7"),
        document.getElementById("material8"),
        document.getElementById("material9"),
        document.getElementById("material10"),
        document.getElementById("material11"),
        document.getElementById("material12"),
        document.getElementById("material13"),
        document.getElementById("material14"),
        document.getElementById("material15")
    ];

    // Database of items
    const items = [
        {
            name: "lockpick",
            material1: 3,
            material2: 2,
            material3: 2
        },
        {
            name: "pikhouweel",
            material4: 2,
            material3: 5,
        },
        {
            name: "Reparatieset",
            material1: 10,
            material5: 10,
            material3: 10
        },
        {
            name: "Houten Bak",
            material4: 10,
            material6: 3
        },
        {
            name: "Elektronische kit",
            material7: 3,
            material8: 3,
            material2: 2,
            material9: 5
        },
      {
            name: "Geavanceerd Lockpick",
            material1: 4,
            material2: 6,
            material10: 2,
            material3: 2
        },
      {
            name: "Radio Scanner",
            material9: 1,
            material2: 6,
            material8: 6,
            material11: 1
        },
      {
            name: "Gieter",
            material2: 30,
            material12: 15
        },
      {
            name: "Plastic Bootje",
            material2: 20,
            material12: 15
        },
      {
            name: "Glazen Kerstbal",
            material13: 15,
        },
      {
            name: "Metaaldetector",
            material14: 1,
            material2: 15,
            material9: 10,
            material7: 15,
            material15: 15
        },
    ];

    // Function to update item details
    function updateItemDetails(item) {
        materialSpans.forEach((span, index) => {
            const material = item[`material${index + 1}`];
            span.textContent = material ? `${material} x ${getMaterialName(index + 1)}` : '';
        });
    }

    // Function to get the material name
    function getMaterialName(index) {
        switch (index) {
            case 1:
                return "Metaalschroot";
            case 2:
                return "Plastic";
            case 3:
                return "Ijzer";
            case 4:
                return "Houten plank";
            case 5:
                return "Staal";
            case 6:
                return "Doosje Spijkers";
            case 7:
                return "Koperdraad";
            case 8:
                return "Kabels";
            case 9:
                return "Elektronische schroot";
            case 10:
                return "Lockpick";
            case 11:
                return "Radio";
            case 12:
                return "Leeg Flesje";
            case 13:
                return "Lege fles glas";
            case 14:
                return "Printplaat";
            case 15:
                return "koper";
            default:
                return "";
        }
    }

    // Function to calculate and display materials
    function calculateMaterials() {
        const itemName = itemSelect.value.toLowerCase();
        const quantity = parseInt(quantityInput.value) || 1; // Ensure quantity is at least 1

        // Find the item in the database
        const item = items.find(i => i.name.toLowerCase() === itemName);

        if (!item) {
            alert("Item not found in database.");
            return;
        }

        updateItemDetails(item);

        // Calculate the total materials based on the quantity
        materialSpans.forEach((span, index) => {
            const material = item[`material${index + 1}`];
            const totalMaterial = material ? material * quantity : 0;
            span.textContent = totalMaterial ? `${totalMaterial} x ${getMaterialName(index + 1)}` : '';
        });
    }

    // Populate the dropdown menu with the items in the database
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.name.toLowerCase();
        option.textContent = item.name;
        itemSelect.appendChild(option);
    });

    // Event listener for the dropdown change
    itemSelect.addEventListener("change", () => {
        calculateMaterials(); // Call the function to update materials when item changes
    });

    // Event listener for quantity change
    quantityInput.addEventListener("input", () => {
        calculateMaterials(); // Call the function to calculate materials when quantity changes
    });

    // Initialize materials display
    calculateMaterials();
});
