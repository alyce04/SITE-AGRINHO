// Efeito de mudança no header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '0';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Mensagem de boas-vindas simples no console
console.log("Agro Sustentável: O futuro está sendo plantado agora!");

