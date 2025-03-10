// Referências aos elementos do menu e botões
const menuToggle = document.getElementById('menuToggle');
const hiddenMenu = document.getElementById('hiddenMenu');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');

// Alternar visibilidade do menu
menuToggle.addEventListener('click', () => {
    hiddenMenu.classList.toggle('hidden');
});

// Função para aplicar um tema
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.style.setProperty('--neutral-light-gray', '#f0f0f0');
        document.body.style.setProperty('--primary-dark-blue', '#003366');
    } else if (theme === 'dark') {
        document.body.style.setProperty('--neutral-light-gray', '#1f1f1f');
        document.body.style.setProperty('--primary-dark-blue', '#00ff6a');
    }
}

// Salvar tema no localStorage
function saveTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
}

// Aplicar o tema claro ao clicar no botão
lightThemeBtn.addEventListener('click', () => {
    applyTheme('light');
    saveTheme('light');
    hiddenMenu.classList.add('hidden'); // Esconder o menu
});

// Aplicar o tema escuro ao clicar no botão
darkThemeBtn.addEventListener('click', () => {
    applyTheme('dark');
    saveTheme('dark');
    hiddenMenu.classList.add('hidden'); // Esconder o menu
});

// Recuperar tema salvo no localStorage no carregamento da página
window.onload = () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light'; // Padrão: tema claro
    applyTheme(savedTheme);
};
