// Fungsi untuk menghitung BMI dengan rumus BMI = berat / (tinggi * tinggi)
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Fungsi untuk menentukan status BMI berdasarkan nilai BMI yang dihitung
function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.999) {
        return "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Kelebihan berat badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

// Menangani event submit pada form untuk menghitung BMI
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form agar tidak dikirim secara default (untuk menghindari refresh halaman)

    // Mendapatkan input pengguna
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;

    // Validasi input
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        alert("Masukkan nilai berat dan tinggi yang valid dan positif.");
        return;
    }

    // Menghitung BMI
    const bmi = calculateBMI(weight, height);
    const bmiStatus = getBMIStatus(bmi);

    // Menampilkan hasil BMI
    document.getElementById("bmiValue").innerText = `BMI Anda: ${bmi.toFixed(2)}`;
    document.getElementById("bmiStatus").innerText = `Status: ${bmiStatus} untuk ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}`;
    
    // Menampilkan elemen hasil
    document.getElementById("result").classList.remove("hidden");
});