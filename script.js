const chems = [
    {
        "id": 1,
        "chemicalName": "Ammonium Persulfate",
        "vendor": "LG Chem",
        "density": "3525.92",
        "viscosity": "60.63",
        "packaging": "Bag",
        "packSize": 100.00,
        "unit": "kg",
        "quantity": 6495.18
    },
    {
        "id": 2,
        "chemicalName": "Caustic Potash",
        "vendor": "Formosa",
        "density": "3172.15",
        "viscosity": "48.22",
        "packaging": "Bag",
        "packSize": 100.00,
        "unit": "kg",
        "quantity": 8751.90
    },
    {
        "id": 3,
        "chemicalName": "Dimethylaminopropylamino",
        "vendor": "LG Chem",
        "density": "8435.37",
        "viscosity": "12.62",
        "packaging": "Barrel",
        "packSize": 75.00,
        "unit": "L",
        "quantity": 5964.61
    },
    {
        "id": 4,
        "chemicalName": "Mono Ammonium Phosphate",
        "vendor": "Sinopec",
        "density": "1597.65",
        "viscosity": "76.51",
        "packaging": "Bag",
        "packSize": 105.00,
        "unit": "kg",
        "quantity": 8183.73
    },
    {
        "id": 5,
        "chemicalName": "Ferric Nitrate",
        "vendor": "DowDuPont",
        "density": "364.04",
        "viscosity": "14.90",
        "packaging": "Bag",
        "packSize": 105.00,
        "unit": "kg",
        "quantity": 4154.33
    },
    {
        "id": 6,
        "chemicalName": "n-Pentane",
        "vendor": "Sinopec",
        "density": "4535.26",
        "viscosity": "66.76",
        "packaging": "N/A",
        "packSize": "N/A",
        "unit": "t",
        "quantity": 6272.34
    },
    {
        "id": 7,
        "chemicalName": "Glycol Ether PM",
        "vendor": "LG Chem",
        "density": "6495.18",
        "viscosity": "72.12",
        "packaging": "Bag",
        "packSize": 250.00,
        "unit": "kg",
        "quantity": 8749.54
    },
    {
        "id": 8,
        "chemicalName": "Sodium Hydroxide",
        "vendor": "BASF",
        "density": "2130.00",
        "viscosity": "35.40",
        "packaging": "Drum",
        "packSize": 50.00,
        "unit": "kg",
        "quantity": 5000.00
    },
    {
        "id": 9,
        "chemicalName": "Hydrochloric Acid",
        "vendor": "Dow Chemical",
        "density": "1190.00",
        "viscosity": "1.90",
        "packaging": "Tank",
        "packSize": 1000.00,
        "unit": "L",
        "quantity": 10000.00
    },
    {
        "id": 10,
        "chemicalName": "Sulfuric Acid",
        "vendor": "Chemours",
        "density": "1840.00",
        "viscosity": "26.70",
        "packaging": "IBC",
        "packSize": 1000.00,
        "unit": "L",
        "quantity": 7500.00
    },
    {
        "id": 11,
        "chemicalName": "Ethanol",
        "vendor": "Cargill",
        "density": "789.00",
        "viscosity": "1.20",
        "packaging": "Drum",
        "packSize": 200.00,
        "unit": "L",
        "quantity": 4000.00
    },
    {
        "id": 12,
        "chemicalName": "Acetone",
        "vendor": "Ineos",
        "density": "784.00",
        "viscosity": "0.32",
        "packaging": "Drum",
        "packSize": 200.00,
        "unit": "L",
        "quantity": 3000.00
    },
    {
        "id": 13,
        "chemicalName": "Methanol",
        "vendor": "Methanex",
        "density": "792.00",
        "viscosity": "0.59",
        "packaging": "IBC",
        "packSize": 1000.00,
        "unit": "L",
        "quantity": 8000.00
    },
    {
        "id": 14,
        "chemicalName": "Hydrogen Peroxide",
        "vendor": "Solvay",
        "density": "1450.00",
        "viscosity": "1.25",
        "packaging": "Drum",
        "packSize": 200.00,
        "unit": "L",
        "quantity": 2500.00
    },
    {
        "id": 15,
        "chemicalName": "Acetic Acid",
        "vendor": "Celanese",
        "density": "1049.00",
        "viscosity": "1.22",
        "packaging": "IBC",
        "packSize": 1000.00,
        "unit": "L",
        "quantity": 6000.00
    }
];

let selectedRowIndex = -1;
let editingRowId = null;

function fillTable() {
    const tableBody = document.getElementById("chem-Table-Body");
    tableBody.innerHTML = "";
    chems.forEach((chem, index) => {
        const row = `
            <tr data-id="${chem.id}">
                <td>${index + 1}</td>
                <td>${chem.chemicalName}</td>
                <td>${chem.vendor}</td>
                <td>${chem.density}</td>
                <td>${chem.viscosity}</td>
                <td>${chem.packaging}</td>
                <td>${chem.packSize}</td>
                <td>${chem.unit}</td>
                <td>${chem.quantity}</td>
                <td>
                    <button class="edit-btn" onclick="editRow(${chem.id})">Edit</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function editRow(id) {
    editingRowId = id;
    const chem = chems.find(c => c.id === id);
    if (chem) {
        document.getElementById('chemicalName').value = chem.chemicalName;
        document.getElementById('vendor').value = chem.vendor;
        document.getElementById('density').value = chem.density;
        document.getElementById('viscosity').value = chem.viscosity;
        document.getElementById('packaging').value = chem.packaging;
        document.getElementById('packSize').value = chem.packSize;
        document.getElementById('unit').value = chem.unit;
        document.getElementById('quantity').value = chem.quantity;
        
        document.getElementById('form-container').style.display = 'block';
        document.getElementById('form-title').textContent = 'Edit Chemical Details';
        document.getElementById('submit-btn').textContent = 'Update Row';
    }
}

document.getElementById('chem-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {
        chemicalName: document.getElementById('chemicalName').value,
        vendor: document.getElementById('vendor').value,
        density: document.getElementById('density').value,
        viscosity: document.getElementById('viscosity').value,
        packaging: document.getElementById('packaging').value,
        packSize: document.getElementById('packSize').value,
        unit: document.getElementById('unit').value,
        quantity: document.getElementById('quantity').value
    };

    if (editingRowId) {
        // Updating existing row
        const index = chems.findIndex(c => c.id === editingRowId);
        if (index !== -1) {
            chems[index] = { ...chems[index], ...formData };
        }
        editingRowId = null;
    } else {
        // Adding new row
        const newChem = {
            id: chems.length + 1,
            ...formData
        };
        chems.push(newChem);
    }

    fillTable();
    document.getElementById('chem-form').reset();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('form-title').textContent = 'Add Chemical Details';
    document.getElementById('submit-btn').textContent = 'Add Row';
});


// Hiding form initially when the page loads
window.onload = function() {
    fillTable();
    document.getElementById('form-container').style.display = 'none';
};


// Function to move selected row down
function moveRowDown() {
    if (selectedRowIndex >= 0 && selectedRowIndex < chems.length - 1) {
        [chems[selectedRowIndex], chems[selectedRowIndex + 1]] = [chems[selectedRowIndex + 1], chems[selectedRowIndex]];
        selectedRowIndex++;
        fillTable();
        highlightSelectedRow();
    }
}


// Function to move selected row up
function moveRowUp() {
    if (selectedRowIndex > 0) {
        [chems[selectedRowIndex], chems[selectedRowIndex - 1]] = [chems[selectedRowIndex - 1], chems[selectedRowIndex]];
        selectedRowIndex--;
        fillTable();
        highlightSelectedRow();
    }
}


// Function to delete selected row
function deleteSelectedRow() {
    if (selectedRowIndex >= 0) {
        chems.splice(selectedRowIndex, 1);
        selectedRowIndex = -1;
        fillTable();
    }
}


// Function to refresh the data
function refreshData() {
    // Simulate fetching new data by adding some randomization
    chems.forEach(chem => {
        chem.quantity = Math.floor(Math.random() * 10000); 
        chem.density = (Math.random() * 5000 + 1000).toFixed(2); 
        chem.viscosity = (Math.random() * 100).toFixed(2); 
    });
    fillTable();
    alert('Data refreshed successfully!');
}


// Function to save the data
function saveData() {
    localStorage.setItem('chemsData', JSON.stringify(chems));
    
    // download option
    if (confirm('Data saved successfully! Would you like to download the data as a file?')) {
        downloadData();
    } else {
        alert('Data saved to local storage.');
    }
}


// Function to download the data as a file
function downloadData() {
    const dataStr = JSON.stringify(chems, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'chemical_data.json';
    
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}


// Function to highlight the selected row
function highlightSelectedRow() {
    const rows = document.querySelectorAll('#chem-Table-Body tr');
    rows.forEach((row, index) => {
        if (index === selectedRowIndex) {
            row.classList.add('selected');
        } else {
            row.classList.remove('selected');
        }
    });
}


// Function to sort the table
function sortTable(columnIndex) {
    const sortKey = Object.keys(chems[0])[columnIndex];
    chems.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1;
        if (a[sortKey] > b[sortKey]) return 1;
        return 0;
    });
    fillTable();
}


// Event listeners for the icons
document.getElementById('add-icon').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
});
document.getElementById('down-icon').addEventListener('click', moveRowDown);
document.getElementById('top-icon').addEventListener('click', moveRowUp);
document.getElementById('delete-icon').addEventListener('click', deleteSelectedRow);
document.getElementById('reload-icon').addEventListener('click', refreshData);
document.getElementById('diskette-icon').addEventListener('click', saveData);


// Adding click event to table rows for selection
document.getElementById('chem-Table-Body').addEventListener('click', function(e) {
    const clickedRow = e.target.closest('tr');
    if (clickedRow) {
        selectedRowIndex = Array.from(clickedRow.parentNode.children).indexOf(clickedRow);
        highlightSelectedRow();
    }
});


// Adding click event to table headers for sorting
document.querySelector('.table-heading').addEventListener('click', function(e) {
    if (e.target.tagName === 'TH') {
        const columnIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
        sortTable(columnIndex);
    }
});

window.onload = fillTable;