// Fungsi dijalankan saat halaman selesai dimuat
window.onload = function() {
  alert("Selamat datang di Perpustakaan Online!");
  
  // Ambil semua link menu navigasi
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Hapus class 'active' dari semua link dulu
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Tambah class 'active' ke link yang diklik
      this.classList.add('active');
    });
  });
  
  // Tambah event alert pada link "Lihat Semua"
  const lihatSemua = document.querySelector('section#library a');
  if (lihatSemua) {
    lihatSemua.addEventListener('click', function(event) {
      alert("Kamu akan melihat semua e-book di halaman lain.");
    });
  }
};
