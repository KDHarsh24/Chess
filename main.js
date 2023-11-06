const board = document.querySelector("#gameboard")
const player = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

const size = 8

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

function createChessBoard()
{
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square') //used when adding a class property of css to element
        square.innerHTML = startPiece
        square.setAttribute('square-id', i)
        if((Math.floor(i/8)%2) == 0)
            square.classList.add(i%2 === 0 ? "beige" : "brown")
        else
            square.classList.add(i%2 === 0 ? "brown" : "beige")

        if ( i < 16 )
            square.firstChild.firstChild.classList.add('black')
        else if(i > 47)
            square.firstChild.firstChild.classList.add('white')

        if (square.firstChild)
            square.firstChild.setAttribute('draggable', true)
        gameboard.append(square)
    })
}
createChessBoard();

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
})

function dragStart(e){
    
}