
document.addEventListener('DOMContentLoaded', function() {
    let boton = document.getElementById('botonTema');
    boton.addEventListener('change', function() {
        if (boton.checked) {
            const div = document.getElementById('mode');
            div.classList.remove('light-mode')
            div.classList.add('dark-mode')
        } else {
            const div = document.getElementById('mode');
            div.classList.remove('dark-mode')
            div.classList.add('light-mode')
        }
    });
}); 




