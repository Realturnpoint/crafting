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
        document.getElementById("material15"),
        document.getElementById("material16"),
        document.getElementById("material17"),
        document.getElementById("material18"),
        document.getElementById("material19"),
        document.getElementById("material20"),
        document.getElementById("material21"),
        document.getElementById("material22"),
        document.getElementById("material23"),
        document.getElementById("material24"),
        document.getElementById("material25"),
        document.getElementById("material26"),
        document.getElementById("material27"),
        document.getElementById("material28"),
        document.getElementById("material29"),
        document.getElementById("material30"),
        document.getElementById("material31"),
        document.getElementById("material32"),
        document.getElementById("material33"),
        document.getElementById("material34")
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
        {
            name: "Grijze USB",
            material14: 1,
            material2: 3,
            material9: 1
        },
        {
            name: "Gereedschapsset",
            material16: 2,
            material2: 5,
            material5: 3
        },
        {
            name: "Slakken Fossiel",
            material17: 5,
        },
        {
            name: "Leeg zakje",
            material18: 1,
        },
        {
            name: "Versteende Slak",
            material17: 5,
        },
        {
            name: "Trilobiet Fossiel",
            material17: 5,
        },
        {
            name: "Tas",
            material19: 15,
            material20: 5
        },
        {
            name: "Vpn",
            material15: 5,
            material14: 1,
            material21: 2
        },
        {
            name: "GPS Verwijderaar",
            material2: 10,
            material9: 10,
            material7: 15,
            material15: 5,
            material22: 2
        },
        {
            name: "Kogelwerend Vest",
            material20: 5,
            material19: 10
        },
        {
            name: "MijnLaser",
            material23: 1,
            material24: 1,
            material2: 10,
            material9: 15
        },
        {
            name: "Zware Boor",
            material2: 10,
            material24: 1,
            material8: 15,
            material23: 1
        },
        {
            name: "Hacking Device",
            material22: 1,
            material1: 10,
            material14: 1,
            material9: 10,
            material15: 5,
        },
        {
            name: "Pijpbom",
            material2: 5,
            material25: 2,
            material26: 1,
            material3: 10,
            material27: 2
        },
        {
            name: "Mal voor Clip",
            material2: 20,
            material28: 1
        },
        {
            name: "Mal voor Trigger",
            material2: 20,
            material28: 1
        },
        {
            name: "Mal voor Loop",
            material2: 20,
            material28: 1
        },
        {
            name: "9mm Ammo Box",
            material29: 5,
            material5: 5,
            material30: 5
        },
        {
            name: "Mal voor Extended Clip",
            material2: 20,
            material28: 1
        },
        {
            name: "Mal voor Silencer",
            material2: 20,
            material28: 1
        },
        {
            name: "SNS Pistool",
            material31: 1,
            material32: 1,
            material33: 1,
            material34: 5,
            material1: 10
        },
        {
            name: "Mal voor CombatPistool loop",
            material2: 20,
            material28: 1
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
                return "Koper";
            case 16:
                return "Geavanceerde Lockpick";
            case 17:
                return "Stukje fossiel";
            case 18:
                return "Plastic Pulp";
            case 19:
                return "Stof";
            case 20:
                return "Rubber";
            case 21:
                return "USB";
            case 22:
                return "Antenne";
            case 23:
                return "Mijnboor";
            case 24:
                return "Elektronische kit";
            case 25:
                return "Aluminium Poeder";
            case 26:
                return "Pijpbom Huls";
            case 27:
                return "Ijzer Poeder";
            case 28:
                return "Houten bak Zand";
            case 29:
                return "9mm Hulzen";
            case 30:
                return "Buskruit";
            case 31:
                return "SNS Trigger";
            case 32:
                return "SNS Loop";
            case 33:
                return "SNS Clip";
            case 34:
                return "Aluminium";
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
