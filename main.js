const board = document.querySelector("#gameboard")
const player = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

const size = 8
let mover = 'white'
player.textContent = 'white'
//Array of 64 for each box in chessboard
const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]
//Making Chess board in JS only
function createChessBoard()
{
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square') //used when adding a class property of css to element
        square.innerHTML = startPiece
        square.setAttribute('square-id', i)
        if((Math.floor(i/8)%2) == 0)
            square.classList.add(i%2 == 0 ? "beige" : "brown")
        else
            square.classList.add(i%2 == 0 ? "brown" : "beige")

        if (i < 16)
            square.firstChild.firstChild.classList.add('black')
        else if(i > 47)
            square.firstChild.firstChild.classList.add('white')

        if (square.firstChild)
            square.firstChild.setAttribute('draggable', true)
        gameboard.append(square)
    })
}
createChessBoard();

const allSquares = document.querySelectorAll(".square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPositionId
let draggedElement
let correctMoving = false
//e.target is giving which div has cursor now
function dragStart(e){
    startPositionId = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
    if(draggedElement.firstChild.classList.contains(mover))
        correctMoving = true
    else
        correctMoving = false
}

function dragOver(e){
    if(correctMoving)
        e.preventDefault()
    else
        e.draggable = false
    //just to make dragging legal
}

function dragDrop(e){
    e.stopPropagation()
    const correct_mover = draggedElement.firstChild.classList.contains(mover)
    const selectPiece = e.target.classList.contains('piece')
    console.log("Piece:", selectPiece)
    console.log("Hand : ", correct_mover)
    let opponent = 'black'
    if(mover === 'black')
        opponent = 'white'
    const takenByOpponent = e.target.firstChild?.classList.contains(opponent)
    //e.target.parentNode.append(draggedElement)
    //e.target.remove()
    //e.target.append(draggedElement)
    changePlayer()
}

function changePlayer(){
    if(mover === 'black'){
        mover = 'white'
        player.textContent = 'white'
        reverseBoard()
    }
    else{
        mover = 'black'
        player.textContent = 'black'
        revertBoard()
    }
}

function reverseBoard(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) =>{
        square.setAttribute('square-id', (63 - i))
    })
}

function revertBoard(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) =>{
        square.setAttribute('square-id', i)
    })
}