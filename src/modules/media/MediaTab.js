import styles from './media.css';
import { hidden as hiddenCls } from 'shared/main.css';
import template from './template';
import mediaList from 'data/media';
import {
  EVT_PUZZLE_FAIL,
  EVT_PUZZLE_SUCCESS,
  EVT_SEND_INITIAL_PHOTOS,
  EVT_PUZZLE_DATA_SENT
} from 'data/events';


class MediaTab {
  constructor() {
    this.template = template
  }

  init (moduleId, el, emitter) {
    this.id = moduleId;
    this.emitter = emitter;
    this.unencrypted = [];
    this.transmittedPackets = [];

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
    this.emitter.bind(EVT_SEND_INITIAL_PHOTOS, () => {
      for (let x = 0; x < 5; x++) {
        this.releasePhoto(x);
      }
    }, this);
  }

  releasePhoto (index) {
    if (index >= mediaList.length) {
        return;
    }

    const imgContainer = this.mediaPanel.querySelector(`[data-index="${index}"]`);
    const imgEl = document.createElement('img');
    imgEl.src = mediaList[index].url;
    imgEl.dataset['index'] = index;
    imgEl.addEventListener('click', () => {
        this.onImageClick(imgEl);
    });

    imgContainer.classList.remove(styles.unavailable);
    imgContainer.appendChild(imgEl);
  }

  onImageClick (imgEl) {
    const index = imgEl.dataset.index;
    if (this.unencrypted.includes(index)) {
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
    this.mediaDetail.appendChild(imgEl.cloneNode(false));
    this.mediaDetail.classList.remove(hiddenCls);
  }

  closeDetails () {
    // Close the detailed photo view
    this.mediaDetail.querySelector('[name="passcode"]').value = '';
    this.mediaDetail.removeChild(this.mediaDetail.lastChild);
    this.mediaDetail.querySelector(`.${styles.errorMsg}`).classList.add(hiddenCls);
    this.mediaDetail.classList.add(hiddenCls);
  }

  checkPasscode () {
    // If correct, close detail view and pass control to puzzle
    const imgEl = this.mediaDetail.lastChild;
    const passcodeEl = this.mediaDetail.querySelector('[name="passcode"]');
    const index = imgEl.dataset.index;

    if (index >= mediaList.length) {
      return false;
    }

    if ( passcodeEl.value === mediaList[index].passcode ) {
      this.unencrypted.push(index);
      this.mediaPanel.querySelector(`div[data-index="${index}"]`).classList.add(styles.complete);
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
    packetEl.value = mediaList[index].payload;
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

    if (!this.transmittedPackets.includes(index)) {
      this.emitter.dispatch(EVT_PUZZLE_DATA_SENT, index);
      this.transmittedPackets.push(index);
    }
    this.closePacket();
  }
};

export default MediaTab;
