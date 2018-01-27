import styles from './media.css';
import { hidden as hiddenCls } from 'shared/main.css';
import template from './template';
import photoList from './files';

class MediaTab {
  constructor() {
    this.template = template
  }

  init (moduleId, el, emitter) {
    this.id = moduleId
    this.emitter = emitter

    this.mediaPanel = el.querySelector(`.${styles.mediaPanel}`) || el;
    this.mediaDetail = el.querySelector(`.${styles.mediaDetail}`);
    this.mediaDetail.querySelector('#detail-cancel').addEventListener('click', () => {
        this.closeDetails();
    });
    this.mediaDetail.querySelector('#detail-submit').addEventListener('click', () => {
        this.checkPasscode();
    });
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
    imgEl.addEventListener('click', () => {
        this.expandPhoto(imgEl);
    });

    imgContainer.classList.remove(styles.unavailable);
    imgContainer.appendChild(imgEl);
  }

  expandPhoto (imgEl) {
    this.mediaDetail.insertBefore(imgEl.cloneNode(false), this.mediaDetail.firstChild);
    this.mediaDetail.classList.remove(hiddenCls);
  }

  closeDetails () {
    this.mediaDetail.removeChild(this.mediaDetail.firstChild);
    this.mediaDetail.classList.add(hiddenCls);
  }

  checkPasscode () {
    // TODO: Check the passcode, return error if wrong
    // If correct, close detail view and pass control to puzzle
    this.closeDetails();
  }
}

export default MediaTab
