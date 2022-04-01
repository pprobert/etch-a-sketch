//create a grid that is 16x16
const box1 = document.getElementById("box1");
//create nested for loop for the grid
function makeGrid (d1,d2) {
    var r = document.querySelector(':root');
    r.style.setProperty("--columns", d1.toString());
    r.style.setProperty("--rows", d2.toString());
    for (let i = 0; i < d1; i++){
        //let colum = document.createElement("div");
              //  box1.appendChild(colum).className = "gridColum";
        for (let j =0; j < d2; j++) {
            let row = document.createElement("div");
            row.id = `cell-${i}-${j}`;
            //make on hover event
            row.addEventListener("mouseover",(e)=>{row.style.backgroundColor = "black";});
            row.classList.add('gridRow');
            box1.appendChild(row);
        };
    };
    
};
makeGrid (16,16);
//make clear function
function clearContent(){
    const cells = document.querySelectorAll('.gridRow')
    console.log(cells)
    cells.forEach((cell)=>{
        cell.style.backgroundColor = 'white';
    });
   // for (let i = 0; i < cells.length; i++){
       //let cell = cells [i]; 
        //cell.style.backgroundColor = 'white';
    // };
};
//make a function to make the nested loop go to 100x100
function change(){
    box1.innerHTML = "";

    const val = prompt("has been reset");
    
    if(val <= 100 && val > 0){
        makeGrid(val, val)
    }
    else {
        alert("value past limit")
    };
};
