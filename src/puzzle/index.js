import styles from './puzzle.css';

/**
 * Sliding puzzle - prototype
 * @author njmcode
*/

const PUZZLE_DIM = 3 // width/height - puzzle is square
const puzzleArrLen = PUZZLE_DIM * PUZZLE_DIM
const namespace = styles.puzzle;


let puzzleEl, solutionArr, currentArr, solutionArrString, blankSpace

// Basic array shuffle
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Handle click, swap items
const handleClick = e => {
  e.preventDefault;
  const arrIndex = parseInt(e.srcElement.dataset.arrIndex);
  console.log('clicked', arrIndex)

  // Check adjacency to blank space
  const isTopEdgeAdj = (arrIndex / PUZZLE_DIM) >> 0 === 0
  const isLeftEdgeAdj = (arrIndex % PUZZLE_DIM) >> 0 === 0
  const isBottomEdgeAdj = (arrIndex / PUZZLE_DIM) >> 0 === PUZZLE_DIM - 1
  const isRightEdgeAdj = (arrIndex % PUZZLE_DIM) >>> 0 === PUZZLE_DIM - 1

  if ((!isTopEdgeAdj && arrIndex - PUZZLE_DIM === blankSpace)
    ||(!isLeftEdgeAdj && arrIndex - 1 === blankSpace)
    ||(!isRightEdgeAdj && arrIndex + 1 === blankSpace)
    ||(!isBottomEdgeAdj && arrIndex + PUZZLE_DIM === blankSpace)) {
      // Move and re-render if possible
      currentArr[blankSpace] = currentArr[arrIndex]
      blankSpace = arrIndex
      currentArr[blankSpace] = null
      render()

      // Check solution
      if (JSON.stringify(currentArr) === solutionArrString) {
        console.log('SOLVED')
      }
  }
}

// Render
function render () {
  puzzleEl.innerHTML = ''
  for (let i = 0; i < puzzleArrLen; i++) {
    const piece = document.createElement('div')
    console.log(i, blankSpace)
    if (currentArr[i] === null) {
      // Null 'piece' is the blank space
      piece.classList.add(styles.puzzlePieceEmpty)
    } else {
      piece.classList.add(styles.puzzlePiece)
      piece.dataset.pieceNum = currentArr[i]
      piece.textContent = currentArr[i].toString()
      piece.addEventListener('click', handleClick, false)
    }
    piece.dataset.arrIndex = i
    puzzleEl.appendChild(piece)
  }
}

function init () {
  console.log('Puzzle init')

  puzzleEl = document.createElement('div')
  puzzleEl.classList.add(namespace);
  document.body.appendChild(puzzleEl)

  solutionArr = []
  currentArr = []

  for (let i = 0; i < puzzleArrLen; i++) {
    const item = (i === puzzleArrLen - 1) ? null : i
    solutionArr.push(item)
    currentArr.push(item)
  }
  solutionArrString = JSON.stringify(solutionArr)

  // Shuffle
  shuffle(currentArr)
  blankSpace = currentArr.indexOf(null)

  render(currentArr)
}

export default {
  init
}

