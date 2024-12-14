// Footer'ı dinamik olarak yüklemek için
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.querySelector('#footer-container');
    if (footerContainer) {
        fetch('../footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Footer yükleme hatası:', error));
    }
  });
  