import styles from './media.css';
import { hidden } from 'shared/main.css';

let imgContainersTemplate = '';

for (let i = 0; i < 5; i++) {
    imgContainersTemplate += `<div data-index="${i}" class="${styles.imageThumbnail} ${styles.unavailable}"></div>`
}

export default `
<div class="${styles.mediaPanel}">
    <div class="${styles.mediaList}">${imgContainersTemplate}</div>
    <div class="${styles.mediaDetail} ${hidden}">
        <div class="${styles.formRow}">
            <label>Passcode:</label>
            <input type="number" name="passcode">
        </div>
        <div class="${styles.errorMsg} ${hidden}">
            <span>Incorrect passcode provided.</span>
        </div>
        <div class="${styles.formRow}">
            <button id="detail-submit" type="button">Enter</button>
            <button id="detail-cancel" type="button">Cancel</button>
        </div>
    </div>
    <div class="${styles.mediaPacket} ${hidden}">
        <h1 class="${styles.packetHeader}">Information Packet Uncovered</h1>
        <textarea id="infoPacket" class="${styles.monochrome}" disabled></textarea>
        <div class="${styles.formRow}">
            <button id="packet-transmit" type="button">Transmit</button>
        </div>
    </div>
</div>
`;
