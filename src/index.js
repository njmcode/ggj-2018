import 'shared/main.css'
import './manifest.json'
import './favicon.gif'

import App from './app'

const splashEl = document.querySelector('#splash-inner')
const storyButEl = splashEl.querySelector('button[data-story]')
const quickButEl = splashEl.querySelector('button[data-quick]')

function startGame(isQuickPlay = false) {
  if (isQuickPlay) console.info('Starting quickplay mode...')
  window.quickPlay = isQuickPlay
  //window.addEventListener('beforeunload', e => { e.returnValue = 'Really quit?' })

  document.querySelector('#splash-inner').style.display = 'none'
  setTimeout(() => {
    const app = new App()
    app.start()
  }, (isQuickPlay ? 1 : 1000))
}

storyButEl.addEventListener('click', e => { startGame() })
quickButEl.addEventListener('click', e => { startGame(true) })