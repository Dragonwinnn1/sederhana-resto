function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan section yang dipilih
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Fungsi untuk menangani pemesanan
function order(menuItem, price, quantity) {
    const totalPrice = price * quantity;
    const message = `Saya ingin memesan ${quantity} ${menuItem} dengan total harga Rp ${totalPrice.toLocaleString()}.`;
    const whatsappNumber = '6285370883257'; // Nomor WhatsApp tanpa tanda +
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka WhatsApp dengan pesan yang telah disiapkan
    window.open(https://api.whatsapp.com/send?phone=6287870080730, '_blank');
}

// Tampilkan beranda secara default saat halaman dimuat
window.onload = function() {
    showSection('home');
    alert("Selamat datang di situs web kami!");
};