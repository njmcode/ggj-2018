import template from './template'
import {
  EVT_MESSAGE_RECEIVED,
  EVT_CHOICES_RECEIVED,
  EVT_CHOICE_SELECTED
} from 'data/events'
import styles from './chat.css'

class ChatTab {
  constructor(chatID) {
    this.chatID = chatID
    this.template = template
  }

  init (el, emitter) {
    this.emitter = emitter

    this.messageLog = []

    this.msgPanelEl = el.querySelector(`.${styles.msgPanel}`);
    this.choicePanelEl = el.querySelector(`.${styles.choicePanel}`);

    this.emitter.bind(EVT_MESSAGE_RECEIVED,
      this.handleIncomingMessage, this)

    this.emitter.bind(EVT_CHOICES_RECEIVED,
        this.handleIncomingMessage, this)
  }

  handleIncomingMessage(msg) {
    if (msg.chat !== this.chatID) return false
    if (msg.event) {
      this.emitter.dispatch(msg.event)
    }
    if (msg.choices) {
      this.displayChoices(msg.choices)
    } else {
      this.displayMessage(msg)
    }
  }

  displayMessage(msg) {
    const container = document.createElement('div');
    container.classList.add(styles.msg, styles[msg.chat]);
    if (msg.isPlayer) container.classList.add(styles.player)
    container.textContent = msg.text;
    this.msgPanelEl.appendChild(container);
    this.messageLog.push(msg);
  }

  displayChoices(options) {
    this.clearChoices()

    options.forEach(opt => {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.textContent = opt.text;
      button.addEventListener('click', () => {
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
