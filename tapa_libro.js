document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');
    const openButton = document.getElementById('openBook');

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'pagina1.html';
    document.head.appendChild(link);
    
    openButton.addEventListener('click', () => {
        book.classList.add('open'); 

        setTimeout(() => {
            window.location.href = 'pagina1.html';
        }, 600); 
    });
});