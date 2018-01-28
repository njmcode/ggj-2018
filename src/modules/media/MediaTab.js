import styles from './media.css';
import { hidden as hiddenCls } from 'shared/main.css';
import template from './template';
import photoList from './files';
import {
  EVT_PUZZLE_FAIL,
  EVT_PUZZLE_SUCCESS,
  EVT_GAME_SEND_PHOTOS,
  EVT_PUZZLE_DATA_SENT
} from 'data/events';
import infoPackets from './info_packets';

const passcodes = [
  '123456',
  '987654',
  '456789',
  '654321',
  '123789'
];

class MediaTab {
  constructor() {
    this.template = template
  }

  init (moduleId, el, emitter) {
    this.id = moduleId;
    this.emitter = emitter;
    this.unencrypted = [];

    this.mediaPanel = el.querySelector(`.${styles.mediaPanel}`) || el;
    this.mediaDetail = el.querySelector(`.${styles.mediaDetail}`);
    this.mediaPacket = el.querySelector(`.${styles.mediaPacket}`);
    this.mediaDetail.querySelector('#detail-cancel').addEventListener('click', () => {
      this.closeDetails();
    });
    this.mediaDetail.querySelector('#detail-submit').addEventListener('click', () => {
      this.checkPasscode();
    });
    this.mediaPacket.querySelector('#packet-transmit').addEventListener('click', () => {
      this.transmitPacket()
    })
    this.emitter.bind(EVT_GAME_SEND_PHOTOS, () => {
      for (let x = 0; x < 5; x++) {
        this.releasePhoto(x);
      }
    }, this);
    setTimeout(() => {
        this.releasePhoto(0);
        this.releasePhoto(1);
    }, 0);
  }

  releasePhoto (index) {
    if (index >= photoList.length) {
        return;
    }

    const imgContainer = this.mediaPanel.querySelector(`[data-index="${index}"]`);
    const imgEl = document.createElement('img');
    imgEl.src = photoList[index];
    imgEl.dataset['index'] = index;
    imgEl.addEventListener('click', () => {
        this.onImageClick(imgEl);
    });

    imgContainer.classList.remove(styles.unavailable);
    imgContainer.appendChild(imgEl);
  }

  onImageClick (imgEl) {
    const index = imgEl.dataset.index;
    if (this.unencrypted.indexOf(index) >= 0) {
      // User has entered the correct passcode already, skip to the info packet
      this.expandPacket(index);
    }
    else {
      // User has not entered the correct passcode for this photo yet
      this.expandDetails(imgEl);
    }
  }

  expandDetails (imgEl) {
    // Expand the detailed photo view
    this.mediaDetail.insertBefore(imgEl.cloneNode(false), this.mediaDetail.firstChild);
    this.mediaDetail.classList.remove(hiddenCls);
  }

  closeDetails () {
    // Close the detailed photo view
    this.mediaDetail.removeChild(this.mediaDetail.firstChild);
    this.mediaDetail.querySelector(`.${styles.errorMsg}`).classList.add(hiddenCls);
    this.mediaDetail.classList.add(hiddenCls);
  }

  checkPasscode () {
    // If correct, close detail view and pass control to puzzle
    const imgEl = this.mediaDetail.firstChild;
    const passcodeEl = this.mediaDetail.querySelector('[name="passcode"]');
    const index = imgEl.dataset.index;

    if (index >= passcodes.length) {
      return false;
    }

    if ( passcodeEl.value === passcodes[index] ) {
      this.unencrypted.push(index);
      this.emitter.dispatch(EVT_PUZZLE_SUCCESS, index);
      this.closeDetails();
      this.expandPacket(index);
    }
    else {
      this.emitter.dispatch(EVT_PUZZLE_FAIL, index);
      this.mediaDetail.querySelector(`.${styles.errorMsg}`).classList.remove(hiddenCls);
    }
  }

  expandPacket (index) {
    // Display the contents of the specified info packet
    const packetEl = this.mediaPacket.querySelector('#infoPacket');
    packetEl.value = infoPackets[index];
    packetEl.dataset.index = index;
    this.mediaPacket.classList.remove(hiddenCls);
  }

  closePacket () {
    const packetEl = this.mediaPacket.querySelector('#infoPacket');
    packetEl.value = '';
    packetEl.dataset.index = '';
    this.mediaPacket.classList.add(hiddenCls);
  }

  transmitPacket () {
    const packetEl = this.mediaPacket.querySelector('#infoPacket');
    const index = packetEl.dataset.index;
    this.emitter.dispatch(EVT_PUZZLE_DATA_SENT, index);
    this.closePacket();
  }
};

export default MediaTab;
