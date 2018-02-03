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

// Check for and parse a custom game token from the URL
if (window.location.hash.substr(1,7) === 'custom:') {
  // Grab everything after '#custom:' and try to decode it from
  // base64 to a URL string, then try to fetch a custom game
  // config from that URL. Allows provision of different game
  // images and passcodes. (See the README for more info).
  const cfgBase = window.location.hash.substr(8)
  try {
    const cfgUrl = atob(cfgBase)
    console.info('Found custom game URL:', cfgUrl)
    console.info('Fetching...')
    customEl.innerHTML = 'Loading...'
    request(cfgUrl, (err, resp, body) => {
      if (err) throw err;
      const customData = JSON.parse(body)
      setupCustomGame(customData)
    })
  } catch (e) {
    console.warn('Could not decode custom config string or fetch custom game.', e)
  }
}

function setupCustomGame(customData) {
  console.info('Got custom game data', customData)

  // Validate custom data
  if (typeof customData !== 'object') {
    console.warn('Invalid custom data format, unable to parse.')
    return false
  }
  if (!customData.meta || !customData.meta.title || !customData.meta.author) {
    console.warn('Error in custom data: no meta.title and/or meta.author specified')
    return false
  }
  if (!customData.images || !(customData.images instanceof Array) || customData.images.length < 5) {
    console.warn('Error in custom data: images must be an array with at least 5 elements')
    return false
  }
  const requiredFields = ['idx', 'url', 'passcode', 'payload']
  let hasErr = false
  customData.images.forEach((data, idx) => {
    requiredFields.forEach(field => {
      if (!(field in data) || data[field] === undefined || data[field] === '') {
        console.log(`Error in custom data: missing or undefined field in images[${idx}]: ${field}`)
        hasErr = true
      }
    })
  })
  if (hasErr) return false

  // Display custom meta on splash page
  customEl.innerHTML = `<h4>${customData.meta.title}</h4> by <strong>${customData.meta.author}</strong>`

  // Start preloading the images
  customData.images.forEach(data => request(data.url, () => {}))

  // Attach custom data to window
  window.customData = customData
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