
document.addEventListener('DOMContentLoaded', () => {
    const siguienteBtn = document.getElementById('Siguiente');
    
    siguienteBtn.addEventListener('click', () => {
        alert('Botón funciona'); 
        window.location.href = 'pagina2.html';
    });
});
