const table_1 = document.querySelector('div.table-1');
var number;
const array = [];
var position = [];
var width = 10;
var positionSelected = [];
function gameBoard(){
    table_1.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    table_1.style.gridTemplateRows = `repeat(${width}, 1fr)`  
    for(let cont = 0; cont < width * width; cont++){
        position.push(cont);
        const row = document.createElement('div');
        array.push(row);
        row.classList.add('row');
        row.addEventListener('click', ()=>{     
            var pos = position[cont];      
            console.log(pos);
            if(pos % 9 == 1){
                alert('INCORECT PLACE')
            }else{
                for(let i = pos; i < pos + 4; i++){
                    array[i].classList.add('row-1');
                    console.log(i);
                }
            }
            
            
        });        
         
        table_1.appendChild(row);
    }
}
gameBoard();
array[0].classList.add('row-1');