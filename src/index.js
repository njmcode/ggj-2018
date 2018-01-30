import request from 'request'

import 'shared/main.css'
import './manifest.json'
import './favicon.gif'
import './game.html'

import App from './app'

const splashEl = document.querySelector('#splash-inner')
const customEl = document.querySelector('#custom-game')
const startButtons = splashEl.querySelector('#start-buttons')
const storyButEl = splashEl.querySelector('button[data-story]')
const quickButEl = splashEl.querySelector('button[data-quick]')

if (window.location.hash.substr(1,7) === 'custom:') {
  const cfgBase = window.location.hash.substr(8)
  try {
    const cfgUrl = atob(cfgBase)
    console.info('Found custom game URL:', cfgUrl)
    console.info('Fetching...')
    customEl.innerHTML = 'Loading...'
    request(cfgUrl, (err, resp, body) => {
      if (err) throw err;
      const customData = JSON.parse(body)
      console.info('Got custom game', customData)
      customEl.innerHTML = `<h4>${customData.meta.title}</h4> by <strong>${customData.meta.author}</strong>`
      window.customData = customData
    })
  } catch (e) {
    console.warn('Could not decode custom config string or fetch custom game.', e)
  }
}

function startGame(isQuickPlay = false) {
  if (isQuickPlay) console.info('Starting quickplay mode...')
  window.quickPlay = isQuickPlay

  document.querySelector('#splash-inner').style.display = 'none'
  setTimeout(() => {
    const app = new App()
    app.start()
  }, (isQuickPlay ? 1 : 1000))
}

storyButEl.addEventListener('click', e => { startGame() })
quickButEl.addEventListener('click', e => { startGame(true) })