
window.onload = function() {
  alert("Selamat datang di Perpustakaan Online!");
  

  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Hapus class 'active' dari semua link dulu
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Tambah class 'active' ke link yang diklik
      this.classList.add('active');
    });
  });
  
 
  const lihatSemua = document.querySelector('section#library a');
  if (lihatSemua) {
    lihatSemua.addEventListener('click', function(event) {
      alert("Kamu akan melihat semua e-book di halaman lain.");
    });
  }
};

