import styles from './chat.css';
import template from './template';

/**
 * Chat window prototype
 *
 * @author reuben-bradley
 */

const messages = [
    { agent: 'other', msg: 'Hello?' },
    { agent: 'other', msg: '... hello, do you read me?' },
    { agent: 'player', msg: 'Hello? Who is this?' },
    { agent: 'other', msg: 'The situation is dire' },
    { agent: 'other', msg: 'We need your help' },
    { agent: 'player', msg: 'What?' }
];
let msgWindow;
let currentIndex = 0;

const init = () => {
    console.log('Chat init')
};

const onEnter = (tabContentEl) => {
  msgWindow = tabContentEl
  recurseMessages();
}

const recurseMessages = () => {
    displayMessage(messages[currentIndex]);
    currentIndex++;
    if ( currentIndex < messages.length ) {
        setTimeout(recurseMessages, 3000);
    }
};

const displayMessage = (message) => {
    let container = document.createElement('div');
    container.classList.add(styles.agent, styles['agent' + message.agent]);
    container.append(message.msg);
    msgWindow.append(container);
}

export default {
  init,
  template,
  onEnter,
}
