import template from './template'
import {
  EVT_MESSAGE_RECEIVED,
  EVT_CHOICES_RECEIVED,
  EVT_CHOICE_SELECTED
} from 'data/events'
import styles from './chat.css'

/**
 * Class representing a Chat tab in the app.
 *
 * Will listen to 'incoming message' events and handle
 * any which have its id attached (see data/gamescript).
 *
 * Responsible for rendering messages and choices in its
 * own tab DOM, and firing appropriate events when the
 * player selects a choice from it.
 *
 * Uses a shared Emitter instance passed into its init()
 */

class ChatTab {
  constructor(chatID) {
    this.chatID = chatID
    this.template = template
  }

  init (el, emitter) {
    this.emitter = emitter

    this.messageLog = []

    // Cache refs to internal DOM for messages and choices
    this.msgPanelEl = el.querySelector(`.${styles.msgPanel}`);
    this.choicePanelEl = el.querySelector(`.${styles.choicePanel}`);

    // Bind events for incoming messages/choices
    this.emitter.bind(EVT_MESSAGE_RECEIVED,
      this.handleIncomingMessage, this)

    this.emitter.bind(EVT_CHOICES_RECEIVED,
        this.handleIncomingMessage, this)
  }

  handleIncomingMessage(msg) {
    // Only handle messages for this instance
    if (msg.chat !== this.chatID) return false

    // Fire any event the message specifies
    if (msg.event) {
      this.emitter.dispatch(msg.event)
    }
    if (msg.choices) {
      // Render in choices panel if there are some
      this.displayChoices(msg.choices)
    } else {
      // Render message output
      this.displayMessage(msg)
    }
  }

  displayMessage(msg) {
    // Render and log a message
    const container = document.createElement('div');
    container.classList.add(styles.msg, styles[msg.chat]);
    if (msg.isPlayer) container.classList.add(styles.player)
    container.textContent = msg.text;
    this.msgPanelEl.appendChild(container);
    this.messageLog.push(msg);
    // Scroll to bottom of panel
    this.msgPanelEl.scrollTop = this.msgPanelEl.scrollHeight
  }

  displayChoices(options) {
    // Render choices
    this.clearChoices()

    options.forEach(opt => {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.textContent = opt.text;
      button.addEventListener('click', () => {
        // Make sure we render the selection in the
        // message output
        this.displayMessage({
          chat: this.chatID,
          text: opt.text,
          isPlayer: true,
        })
        this.clearChoices()
        this.emitter.dispatch(EVT_CHOICE_SELECTED, opt)
      });
      this.choicePanelEl.appendChild(button);
    })
  }

  clearChoices() {
    this.choicePanelEl.innerHTML = ''
  }

}

export default ChatTab
