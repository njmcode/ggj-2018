import template from './template'

class MediaTab {
  constructor() {
    this.template = template
  }

  init (el, emitter) {
    this.emitter = emitter

    console.log('Media tab initialised')
  }
}

export default MediaTab
