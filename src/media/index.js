import styles from './media.css';
import { hidden as hiddenCls } from '../shared/main.css';
import template from './template';

let photoList = [
    'src/assets/location1.jpg',
    'src/assets/location2.jpg',
    'src/assets/location3.jpg',
    'src/assets/location4.jpg',
    'src/assets/location5.jpg'
]
let mediaPanel, mediaDetail;

/**
 * Media window prototype
 * 
 * @author reuben-bradley
 */
const Media = {
    template: template,
    init: () => {
        console.log('Media init');
    },
    onEnter: (tabContentEl) => {
        mediaPanel = tabContentEl.querySelector(`.${styles.mediaPanel}`) || tabContentEl;
        mediaDetail = tabContentEl.querySelector(`.${styles.mediaDetail}`);
        mediaDetail.querySelector('#detail-cancel').addEventListener('click', () => {
            Media.closeDetails();
        });
        mediaDetail.querySelector('#detail-submit').addEventListener('click', () => {
            Media.checkPasscode();
        });
        setTimeout(() => {
            Media.releasePhoto(0);
            Media.releasePhoto(1);
        }, 0);
    },
    onExit: () => {},
    releasePhoto: (index) => {
        if (index >= photoList.length) {
            return;
        }

        const imgContainer = mediaPanel.querySelector(`[data-index="${index}"]`);
        const imgEl = document.createElement('img');
        imgEl.src = photoList[index];
        imgEl.addEventListener('click', () => {
            Media.expandPhoto(imgEl);
        });

        imgContainer.classList.remove(styles.unavailable);
        imgContainer.appendChild(imgEl);
    },
    expandPhoto: (imgEl) => {
        mediaDetail.insertBefore(imgEl.cloneNode(false), mediaDetail.firstChild);
        mediaDetail.classList.remove(hiddenCls);
        console.log('expanding photo', hiddenCls);
    },
    closeDetails: () => {
        mediaDetail.removeChild(mediaDetail.firstChild);
        mediaDetail.classList.add(hiddenCls);
    },
    checkPasscode: () => {
        // TODO: Check the passcode, return error if wrong
        // If correct, close detail view and pass control to puzzle
        Media.closeDetails();
    }
};

export default Media;
