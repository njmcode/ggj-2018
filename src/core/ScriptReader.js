/**
 * Utility class to read 'game script' data and keep
 * track of what chapter/message we're currently on.
 *
 * Exposes method for changing chapter and getting the
 * next message, if available, of the current one.
 */

class ScriptReader {
  constructor(script) {
    this.script = script
    console.log('ScriptReader', this.script)
  }

  init(id) {
    this.currentChapter = null
    this.currentChapterId = null
    this.chapterLength = 0
    this.currentChapterMsgIdx = -1

    if (id) this.startChapter(id)
  }

  startChapter(id) {
    if (id === null) return false

    if (!(id in this.script.chapters)) {
      console.warn('ScriptReader: invalid chapter id', id)
      return false
    }
    this.currentChapter = this.script.chapters[id]
    this.currentChapterId = id
    this.chapterLength = this.currentChapter.length
    this.currentChapterMsgIdx = -1
  }

  getNextMsg() {
    if (!this.currentChapter || this.currentChapterMsgIdx === this.chapterLength - 1) {
      console.info('ScriptReader: no further messages in chapter', this.currentChapterId)
      return false
    }
    this.currentChapterMsgIdx++
    return this.currentChapter[this.currentChapterMsgIdx]
  }
}

export default ScriptReader