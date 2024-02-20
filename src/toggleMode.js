let darkMode = true
const btnToggle = document.getElementById('toggle-mode-btn')

btnToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    // accessibility
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode
})