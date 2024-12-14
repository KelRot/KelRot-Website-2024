function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    const infoBox = panel.querySelector('.info-box');
    const logoContainer = panel.querySelector('.logo-cont');

    // Diğer kategorilerin info-box'larını kapat ve logolarını eski haline getir
    const allCategories = document.querySelectorAll('.sponsor-category');
    allCategories.forEach(category => {
        const otherInfoBox = category.querySelector('.info-box');
        const otherLogoContainer = category.querySelector('.logo-cont');
        
        // Diğer info-box'ları gizle
        if (otherInfoBox !== infoBox) {
            otherInfoBox.classList.remove('open');
        }

        // Diğer logoları eski haline getir
        if (otherLogoContainer !== logoContainer) {
            otherLogoContainer.classList.remove('move-right');
        }
    });

    // Seçilen kategori için info-box'ı aç ve logoları sağa kaydır
    if (infoBox.classList.contains('open')) {
        // Eğer info-box zaten açıksa, kapat
        infoBox.classList.remove('open');
        logoContainer.classList.remove('move-right');
    } else {
        // Info-box'ı aç ve logoları sağa kaydır
        infoBox.classList.add('open');
        logoContainer.classList.add('move-right');
    }
}
