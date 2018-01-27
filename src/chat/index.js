import styles from './chat.css';
import template from './template';
import 'babel-polyfill';

/**
 * Chat window prototype
 *
 * @author reuben-bradley
 */
const Chat = (() => {
    let messages = [];
    /*
        { agent: 'other', msg: 'Hello?' },
        { agent: 'other', msg: '... hello, do you read me?' },
        { agent: 'player', msg: 'Hello? Who is this?' },
        { agent: 'other', msg: 'The situation is dire' },
        { agent: 'other', msg: 'We need your help' },
        { agent: 'player', msg: 'What?' }
    ];*/
    let msgPanel, choicePanel;
    let eGen = eventGenerator();
    let runonce = true;

    const init = () => {
        console.log('Chat init');
    };

    const onEnter = (tabContentEl) => {
        msgPanel = tabContentEl.querySelector('#msgPanel');
        choicePanel = tabContentEl.querySelector('#choicePanel');
        playIncoming([
            { agent: 'other', msg: 'Hello?' },
            { agent: 'other', msg: '... hello, do you read me?' },
        ]);
    }

    const displayMessage = (message) => {
        let container = document.createElement('div');
        container.classList.add(styles.agent, styles['agent-' + message.agent]);
        container.textContent = message.msg;
        msgPanel.appendChild(container);
    };
    
    const displayChoice = (options) => {
        for ( let c in options ) {
            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.textContent = options[c].text;
            button.addEventListener('click', options[c].callback);
            choicePanel.appendChild(button);
        }
    };
    
    
    function* eventGenerator() {
        while (messages) {
            yield messages.shift();
        }
    };
    
    const handleNextEvent = () => {
        let event = eGen.next();
        
        if (event && event.value) {
            displayMessage(event.value);
            setTimeout(handleNextEvent, 3000);
        }
        else {
            displayChoice([
                { text: 'Five by five, good buddy', callback: () => console.log('5x5') },
                { text: 'Who is this?', callback: () => console.log('owl') }
            ]);
        }
    };
    
    const playIncoming = (msgList) => {
        messages.push(...msgList);
        setTimeout(handleNextEvent, 0);
    };
    
    return { init, template, onEnter };
})();

export default Chat;
