import ScriptReader from 'core/ScriptReader'
import gamescript, { CHAT_A, CHAT_B } from 'data/gamescript'
import {
  EVT_ADVANCE_GAME_STATE,
  EVT_CHOICE_SELECTED,
  EVT_CHOICES_RECEIVED,
  EVT_MESSAGE_RECEIVED,
  EVT_PUZZLE_FAIL,
  EVT_PUZZLE_SUCCESS,
  EVT_PUZZLE_FIRST_OPEN,
  EVT_PUZZLE_DATA_SENT,
  EVT_TAB_NOTIFY,
  EVT_SEND_INITIAL_PHOTOS,
  EVT_FAILGAME,
  EVT_PLAY_SOUND,
  EVT_IMPATIENT_TAP
} from 'data/events'

/**
 * Internal module to handle game state.
 * Responsible for 'pushing out' new messages from the
 * game script and firing events that the tab modules
 * and app shell can respond to.
 *
 * Also handles all internal game logic for what happens
 * when certain events are fired (puzzle completion,
 * choices made by the player, etc)
 *
 * Renders no UI of its own.
 * Uses an Emitter instance passed into it.
 */

class GameState {
  constructor(emitter) {
    this.emitter = emitter
    this.reader = new ScriptReader(gamescript)

    this.initialChapter = 'intro1'
    this.puzzleChapters = [
      'firstpuzzlesent',
      'strangepackage',
      'readfile',
      'helloagents',
      'finalpacket'
    ]

    this.choiceHistory = []

    this.puzzleAttemptsLeft = 3
    this.totalPuzzles = 5

    if (window.isQuickplay) {
      this.eventBindings = {
        [EVT_PUZZLE_SUCCESS]: 'handlePuzzleSuccess',
        [EVT_PUZZLE_FAIL]: 'handlePuzzleFail',
        [EVT_FAILGAME]: 'handleGameOver'
      }
    } else {
      this.eventBindings = {
        [EVT_CHOICE_SELECTED]: 'handlePlayerDecision',
        [EVT_PUZZLE_FIRST_OPEN]: 'handleFirstPuzzleOpen',
        [EVT_PUZZLE_SUCCESS]: 'handlePuzzleSuccess',
        [EVT_PUZZLE_DATA_SENT]: 'handlePuzzleDataSent',
        [EVT_PUZZLE_FAIL]: 'handlePuzzleFail',
        [EVT_SEND_INITIAL_PHOTOS]: 'handleFirstPhotos',
        [EVT_ADVANCE_GAME_STATE]: 'advance',
        [EVT_FAILGAME]: 'handleGameOver',
        [EVT_IMPATIENT_TAP]: 'handleImpatientPlayer'
      }
    }

    this.puzzleStatus = []
    for (let i = 0; i < this.totalPuzzles; i++) {
      this.puzzleStatus.push({
        puzzleID: 0,
        isComplete: false,
        isSent: false
      })
    }
  }

  init() {
    for (let ev in this.eventBindings) {
      this.emitter.bind(ev, this[this.eventBindings[ev]], this)
    }

    if (window.quickPlay) {
      this.sendQuickplayNotification('*** QUICKPLAY MODE ***')
      this.sendQuickplayNotification(`Puzzles remaining: ${this.totalPuzzles - this.getCompletedPuzzleCount()}`)
      this.emitter.dispatch(EVT_SEND_INITIAL_PHOTOS)
    } else {
      this.reader.init(this.initialChapter)
      this.advance()
    }
  }

  advance() {
    const msg = this.reader.getNextMsg()

    if (msg) {
      if (msg.event) {
        this.emitter.dispatch(msg.event)
      }
      if (msg.choices) {
        this.emitter.dispatch(EVT_CHOICES_RECEIVED, msg)
      } else {
        this.msgFn = () => {
          clearTimeout(this.msgTimeout);
          this.msgFn = () => {};
          this.emitter.dispatch(EVT_MESSAGE_RECEIVED, msg)
          this.advance()
        };
        this.msgTimeout = setTimeout(this.msgFn, (window.quickPlay ? 1000 : 3000)) // TODO: calc time to display message
      }
    }
  }

  /* Quickplay */

  sendQuickplayNotification (text) {
   this.emitter.dispatch(EVT_MESSAGE_RECEIVED, {
     text,
     chat: CHAT_A,
   })
  }

  /** Game logic and advancement callbacks */

  getCompletedPuzzleCount() {
    return this.puzzleStatus.filter(p => p.isComplete).length
  }

  getSentPuzzleDataCount() {
    return this.puzzleStatus.filter(p => p.isComplete && p.isSent).length
  }

  handlePlayerDecision(choice) {
    // TODO: handle game/state logic around selection
    this.choiceHistory.push(choice)
    this.reader.startChapter(choice.goto)
    this.advance()
  }

  // When phots are first sent/Media tab revealed
  handleFirstPhotos() {
    this.emitter.dispatch(EVT_TAB_NOTIFY, 'Media')
  }

  // Chat tutorial when first decryption attempted
  handleFirstPuzzleOpen() {
    this.reader.startChapter('tutorial')
    this.advance()
  }

  // Called when a puzzle is completed (decrypted)
  handlePuzzleSuccess(puzzleId) {
    this.puzzleStatus[puzzleId].isComplete = true

    // Instructions after completing first puzzle
    if (!window.quickPlay) {
      if (this.getCompletedPuzzleCount() === 1) {
        this.reader.startChapter('firstpuzzlecomplete')
        this.advance()
      }
    }
  }

  // Called when a puzzle data is sent
  handlePuzzleDataSent(puzzleId) {
    this.puzzleStatus[puzzleId].isSent = true

    // Response after first puzzle sent
    if (window.quickPlay) {
      this.sendQuickplayNotification(`Puzzles remaining: ${this.totalPuzzles - this.getCompletedPuzzleCount()}`)
    } else  {
      /*if (this.getSentPuzzleDataCount() === 1) {
        this.reader.startChapter('firstpuzzlesent')
        this.advance()
      }
      else if (this.getSentPuzzleDataCount() === 2) {
        this.reader.startChapter('strangepackage');
        this.advance();
      }
      else*/
      const puzzleIndex = this.getSentPuzzleDataCount() - 1;
      if (puzzleIndex === this.totalPuzzles) {
        this.reader.startChapter('tempwin');
        this.advance();
      }
      else if (this.puzzleChapters[puzzleIndex] !== '') {
        this.reader.startChapter(this.puzzleChapters[puzzleIndex]);
        this.advance();
      }
    }
  }

  // Fail messages if you screw up
  handlePuzzleFail(puzzleId) {
    this.puzzleAttemptsLeft--

    if (this.puzzleAttemptsLeft > 1) {
      this.reader.startChapter('failstate1')
      this.advance()
    } else if (this.puzzleAttemptsLeft > 0) {
      this.reader.startChapter('failstate2')
      this.advance()
    } else if (this.puzzleAttemptsLeft === 0) {
      this.reader.startChapter('failstate3')
      this.advance()
    }
  }

  // Allow players to advance the dialog quicker
  handleImpatientPlayer() {
    if (this.msgTimeout) {
      clearTimeout(this.msgTimeout);
      this.msgFn();
    }
  }

  handleGameOver() {
    // TODO: game over
    console.log('GAME OVER')
  }

}

export default GameState