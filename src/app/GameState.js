import ScriptReader from 'core/ScriptReader'
import gamescript, { CHAT_A, CHAT_B } from 'data/gamescript'
import {
  EVT_ADVANCE_GAME_STATE,
  EVT_CHOICE_SELECTED,
  EVT_CHOICES_RECEIVED,
  EVT_MESSAGE_RECEIVED,
  EVT_PUZZLE_FAIL,
  EVT_PUZZLE_SUCCESS
} from 'data/events'

class GameState {
  constructor(emitter) {
    this.emitter = emitter
    this.reader = new ScriptReader(gamescript)

    this.initialChapter = 'intro1'

    this.choiceHistory = []
    this.puzzleAttemptsLeft = 2
  }

  init() {
    this.emitter.bind(EVT_CHOICE_SELECTED, this.handlePlayerDecision, this)
    this.emitter.bind(EVT_PUZZLE_SUCCESS, this.handlePuzzleSuccess, this)
    this.emitter.bind(EVT_PUZZLE_FAIL, this.handlePuzzleFail, this)
    this.emitter.bind(EVT_ADVANCE_GAME_STATE, this.advance, this)

    this.reader.init(this.initialChapter)
    this.advance()
  }

  advance() {
    const msg = this.reader.getNextMsg()

    if (msg) {
      if (msg.choices) {
        this.emitter.dispatch(EVT_CHOICES_RECEIVED, msg)
      } else {
        setTimeout(() => {
          this.emitter.dispatch(EVT_MESSAGE_RECEIVED, msg)
          this.advance()
        }, 1000) // TODO: calc time to display message
      }
    }
  }

  handlePlayerDecision(choice) {
    // TODO: handle game/state logic around selection
    this.reader.startChapter(choice.goto)
    this.advance()
  }

  handlePuzzleSuccess(puzzleId) {
    // todo
  }

  handlePuzzleFail(puzzleId) {
    // todo
  }
}

export default GameState