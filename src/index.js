const table_1 = document.querySelector('div.table-1');
var number;
const array = [];
var position = [];
var width = 10
function gameBoard(){
    table_1.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    table_1.style.gridTemplateRows = `repeat(${width}, 1fr)`  
    for(let cont = 0; cont < width * width; cont++){
        position.push(cont);
        const row = document.createElement('div');
        array.push(row);
        row.classList.add('row');
        row.addEventListener('click', ()=>{            
            console.log(position[cont]);
            row.classList.add('row-1');
        });        
        row.addEventListener('dblick', ()=>{
            console.log(array[cont]);
            row.classList.add('row');
        });   
        table_1.appendChild(row);
    }
}
gameBoard();
array[0].classList.add('row-1');