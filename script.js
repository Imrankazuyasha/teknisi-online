document.addEventListener("DOMContentLoaded", () => {
    // Simulasi jumlah teknisi tersedia
    const teknisiReady = 5; // Ganti sesuai data backend Anda
    document.getElementById("teknisi-ready").textContent = `${teknisiReady} teknisi siap melayani Anda`;

    // Form kritik dan saran
    const form = document.getElementById("saran-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const feedback = document.getElementById("feedback").value;

        // Kirim data feedback ke server (dalam contoh ini hanya menampilkan pesan sukses)
        responseMessage.textContent = "Terima kasih atas kritik dan saran Anda!";
        responseMessage.style.color = "green";

        // Reset form
        form.reset();
    });
});
