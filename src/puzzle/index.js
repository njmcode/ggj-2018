import styles from './puzzle.css';

/**
 * Sliding puzzle - prototype
 * @author njmcode
*/

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const namespace = styles.puzzle;

const puzzleEl = document.createElement('div')
puzzleEl.classList.add(namespace);

const PUZZLE_DIM = 3 // width/height - puzzle is square

// Set up solution & current arrays
const puzzleArrLen = PUZZLE_DIM * PUZZLE_DIM

let solutionArr = []
let currentArr = []

for (let i = 0; i < puzzleArrLen; i++) {
  solutionArr.push(i)
  currentArr.push(i)
}

// Shuffle
shuffle(currentArr)
console.log(currentArr)

// Render
function render () {
  puzzleEl.innerHTML = ''
  for (let i = 0; i < puzzleArrLen; i++) {
    const piece = document.createElement('div')
    if (i === 0) {
      piece.classList.add(styles.puzzlePieceEmpty)
    } else {
      piece.classList.add(styles.puzzlePiece)
      piece.textContent = currentArr[i].toString()
      puzzleEl.appendChild(piece)
    }

  }
}

function init () {
  console.log('Puzzle init')
  document.body.appendChild(puzzleEl)
  render(currentArr)
}

export default {
  init
}

