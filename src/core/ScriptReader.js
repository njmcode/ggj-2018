class ScriptReader {
  constructor(script) {
    this.script = script
    console.log('ScriptReader', this.script)
  }

  init(id) {
    this.currentChapter = null
    this.currentChapterId = null
    this.chapterLength = 0
    this.currentChapterMsgIdx = 0
    this.choiceHistory = []

    if (id) this.startChapter(id)
  }

  startChapter(id) {
    if (!(id in this.script.chapters)) {
      console.warn('ScriptReader: invalid chapter id', id)
      return false
    }
    this.currentChapter = this.script.chapters[id]
    this.currentChapterId = id
    this.chapterLength = this.currentChapter.length
    this.currentChapterMsgIdx = 0
  }

  getNextMsg() {
    if (!this.currentChapter || this.currentChapterMsgIdx === this.chapterLength - 1) {
      console.info('ScriptReader: no further messages in chapter', this.currentChapterId)
      return false
    }
    this.currentChapterMsgIdx++
    return this.currentChapter[this.currentChapterMsgIdx]
  }

  handleChoice(choiceObj) {
    if (choice.goto) {
      if (!(choice.goto in this.script.chapters)) {
        console.warn('ScriptReader: invalid goto id for choice', choice)
        return false
      }

      if (choice.id) {
        this.choiceHistory.push(choice.id)
      }

      this.startChapter(choice.goto)
    }
  }
}

export default ScriptReader