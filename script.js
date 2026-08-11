// Menu navigasi untuk HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// Tutup menu setelah memilih halaman
document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Animasi muncul saat halaman di-scroll
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 70) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Pesan untuk tombol media sosial
function showSocialMessage(event) {
    event.preventDefault();
    alert("Link media sosial bisa ditambahkan di bagian Kontak pada file index.html.");
}
