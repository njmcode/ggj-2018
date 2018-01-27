import 'shared/main.css'
import './manifest.json'

import App from './app'

console.log('Kick off')
const app = new App()

const SKIP_INTRO = false

if (SKIP_INTRO) {
  app.start()
} else {
  const startBut = document.querySelector('#splash-inner button')
  startBut.addEventListener('click', e => {
    app.start()
  })
}
