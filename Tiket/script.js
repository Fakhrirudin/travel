// Function to calculate discount and update total
function calculateTotal() {
    // Get values from form fields
    const jumlahTiket = parseInt(document.getElementById("jumlahTiket").value, 10);
    const member = document.getElementById("member").checked;
    let hargaTiket = 0; // Harga tiket awal

    // Get the selected destination
    const selectedDestination = document.getElementById("tujuan").value;

    // Set harga tiket berdasarkan destinasi yang dipilih
    if (selectedDestination === "malaysia") {
        hargaTiket = 650000; // Harga tiket untuk Malaysia
        document.getElementById("hargaTiket").placeholder = "650.000.00";
    } else if (selectedDestination === "singapore") {
        hargaTiket = 720000; // Harga tiket untuk Singapore
        document.getElementById("hargaTiket").placeholder = "720.000.00";
    } else if (selectedDestination === "thailand") {
        hargaTiket = 900000; // Harga tiket untuk Thailand
        document.getElementById("hargaTiket").placeholder = "900.000.00";
    } else if (selectedDestination === "jepang") {
        hargaTiket = 1150000; // Harga tiket untuk Jepang
        document.getElementById("hargaTiket").placeholder = "1.150.000.00";
    } else if (selectedDestination === "korea") {
        hargaTiket = 1300000; // Harga tiket untuk Korea
        document.getElementById("hargaTiket").placeholder = "1.300.000.00";
    }

    // Calculate discount (10% if member, 0% otherwise)
    const diskon = member ? 0.1 : 0;

    // Update discount field
    document.getElementById("diskon").value = (diskon * 100).toFixed(2);

    // Calculate total after discount
    const total = (hargaTiket * jumlahTiket * (1 - diskon)).toFixed(2);

    // Update total field
    document.getElementById("total").value = total
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Attach the calculateTotal function to the jumlahTiket field change event
document.getElementById("jumlahTiket").addEventListener("input", calculateTotal);

// Attach the calculateTotal function to the checkbox click event
document.getElementById("member").addEventListener("change", calculateTotal);

// Attach the calculateTotal function to the destination selection change event
document.getElementById("tujuan").addEventListener("change", calculateTotal);

// Calculate the total when the page loads
calculateTotal();

  // Function to handle the form submission
function submitForm() {
    // Get values from form fields
    const nama = document.getElementById("inputNama").value;
    const tujuan = document.getElementById("tujuan").value;
    const hargaTiket = document.getElementById("hargaTiket").value;
    const jumlahTiket = document.getElementById("jumlahTiket").value;
    const isMember = document.getElementById("member").checked;
    const diskon = document.getElementById("diskon").value;
    const total = document.getElementById("total").value;

    
// Create a receipt with the collected data
const receipt = `
    Nama: ${nama}
    Tujuan: ${tujuan}
    Harga Tiket: Rp.${hargaTiket}
    Jumlah Tiket: ${jumlahTiket}
    Member: ${isMember ? "Ya" : "Tidak"}
    Diskon: ${diskon}%
    Total Bayar: Rp.${total}
`;

// Display the receipt in a new window
const receiptWindow = window.open("", "Receipt", "width=400,height=400");
receiptWindow.document.write("<pre>" + receipt + "</pre>");
}

// Attach the submitForm function to the form's submit event
document.querySelector("form").addEventListener("submit", function (event) {
event.preventDefault(); // Prevent the default form submission
submitForm(); // Call the submitForm function to handle the data
});
