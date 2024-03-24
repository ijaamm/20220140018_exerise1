function gantiGambar() {
    var gambar = document.getElementById('gambar');
    var deskripsi = document.querySelector('.poppins-regular');

    // Cek apakah deskripsi sedang ditampilkan
    if (deskripsi.style.display !== 'none') {
        // Jika iya, sembunyikan deskripsi
        deskripsi.style.display = 'none';
    } else {
        // Jika tidak, tampilkan kembali deskripsi
        deskripsi.style.display = 'block';
    }

    // Cek apakah gambar yang sedang ditampilkan adalah gambar 1
    if (gambar.src.endsWith('aset/logo.png')) {
        // Jika iya, ganti menjadi gambar 2
        gambar.src = 'aset/image1.png';
    } else {
        // Jika tidak, ganti menjadi gambar 1
        gambar.src = 'aset/logo.png';
    }

    var loveYouText = document.createElement('p');
                loveYouText.textContent = 'Love You';
                loveYouText.classList.add('love-you');

                // Mengatur efek siluet RGB pada teks "love you"
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                loveYouText.style.textShadow = `0 0 10px rgb(${randomColor})`;

                document.querySelector('.Notes').appendChild(loveYouText);
}