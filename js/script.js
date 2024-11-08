// js/script.js

// Fungsi untuk menghitung BMI dengan rumus BMI = berat / (tinggi * tinggi)
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Fungsi untuk menentukan status BMI berdasarkan nilai BMI yang dihitung
function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Kelebihan berat badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

// Menangani event submit pada form untuk menghitung BMI
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    
    // Mengambil nilai jenis kelamin dari radio button yang dipilih
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0 || isNaN(age) || age <= 0) {
        alert("Masukkan nilai berat, tinggi, dan usia yang valid dan positif.");
        return;
    }

    const bmi = calculateBMI(weight, height);
    const bmiStatus = getBMIStatus(bmi);

    document.getElementById("bmiValue").innerText = `BMI Anda: ${bmi.toFixed(2)}`;
    document.getElementById("bmiStatus").innerText = `Status: ${bmiStatus} untuk usia ${age} tahun, ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}`;
    document.getElementById("result").classList.remove("hidden");
});

// Fungsi untuk mereset form dan menyembunyikan hasil
function resetForm() {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").classList.add("hidden");
}