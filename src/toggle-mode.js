let darkMode = true /*Variavel de controle*/
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')/*Função TOGGLE "TROCA" se tiver light então tira, se não tiver então adiciona*/
  
  const mode = darkMode ? 'light' : 'dark'/*darkMode is true? então MODE vai ser light, se não vai ser dark */
  
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`/*currentTarget: vai ser o buttonToggle*/

  darkMode = !darkMode /*aqui estamos mudando o darkMode =  TRUE para FALSE*/
})