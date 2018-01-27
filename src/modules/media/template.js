import styles from './media.css';
import { hidden } from 'shared/main.css';

let imgContainersTemplate = '';

for (let i = 0; i < 9; i++) {
    imgContainersTemplate += `<div data-index="${i}" class="${styles.imageThumbnail} ${styles.unavailable}"></div>`
}

export default `
<div class="${styles.mediaPanel}">
    <div class="${styles.mediaList}">${imgContainersTemplate}</div>
    <div class="${styles.mediaDetail} ${hidden}">
        <div>
            <label>Passcode:</label>
            <input type="text" name="passcode">
        </div>
        <div>
            <button id="detail-submit" type="button">Enter</button>
            <button id="detail-cancel" type="button">Cancel</button>
        </div>
    </div>
</div>
`;