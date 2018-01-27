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
    document.querySelector('#splash-inner').style.display = 'none'
    setTimeout(() => {
      app.start()
    }, 1000)
  })

  //window.addEventListener('beforeunload', e => { e.returnValue = 'Really quit?' })
}
