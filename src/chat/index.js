import styles from './chat.css';
import template from './template';
import 'babel-polyfill';

/**
 * Chat window prototype
 *
 * @author reuben-bradley
 */
const Chat = () => {
    let messageLog = [];
    let messageQueue = [];
    let choiceQueue = [];
    let msgPanel, choicePanel;
    let eGen = eventGenerator();
    let msgTimeout;

    const init = () => {
        console.log('Chat init');
    };

    const onEnter = (tabContentEl) => {
        msgPanel = tabContentEl.querySelector(`.${styles.msgPanel}`);
        choicePanel = tabContentEl.querySelector(`.${styles.choicePanel}`);
        handleNextEvent();
    };

    const onExit = () => {};

    const displayMessage = (message) => {
        let container = document.createElement('div');
        container.classList.add(styles.agent, styles['agent-' + message.agent]);
        container.textContent = message.msg;
        msgPanel.appendChild(container);
        messageLog.push(message);
    };
    
    const displayChoice = (options) => {
        for (let c in options) {
            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.textContent = options[c].text;
            button.addEventListener('click', () => {
                displayMessage({
                    agent: 'player',
                    msg: options[c].text
                });
                options[c].callback();
            });
            choicePanel.appendChild(button);
        }
    };
    
    
    function* eventGenerator() {
        while (true) {
            yield messageQueue.shift() || choiceQueue.shift();
        }
    };
    
    const handleNextEvent = () => {
        let event = eGen.next();
        
        if (event && event.value) {
            if (Array.isArray(event.value)) {
                displayChoice(event.value);
            }
            else {
                displayMessage(event.value);
            }
            msgTimeout = setTimeout(handleNextEvent, 3000);
        }
    };
    
    const playIncoming = (msgList) => {
        console.log('Given a list of messages', msgList);
        messageQueue.push(...msgList);
        setTimeout(handleNextEvent, 0);
    };

    const provideChoice = (options) => {
        console.log('Given a choice for the player', options);
        choiceQueue.push(options);
    };
    
    return { init, template, onEnter, playIncoming, provideChoice };
};

export default Chat;
