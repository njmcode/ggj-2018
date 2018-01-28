import { Z_DEFAULT_STRATEGY } from "zlib";

class SoundPlayer {
  constructor(manifest) {
    console.log('manifest', manifest)

    this.sounds = {}

    for (let k in manifest) {
      const aud = document.createElement('audio')
      aud.autoplay = false
      aud.controls = false
      aud.loop = false
      aud.src = manifest[k]

      this.sounds[k] = {
        id: k,
        src: manifest[k],
        el: aud
      }
    }
  }

  play(id) {
    if (!(id in this.sounds)) return false
    if (this.sounds[id].el.readystate < 2) return false
    this.sounds[id].el.play()
  }
}

export default SoundPlayer
