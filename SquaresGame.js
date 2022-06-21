import * as Projects_Hub from './Projects_Hub.js';

function Create_Work_Area3(e){
    Projects_Hub.ClearProject();

    //Re-Assigning the main button value and function
    document.getElementById("button_2").addEventListener("click", Squares);

    //Creating the needed work area
    let new_div = document.createElement("div");
      //  new_div.setAttribute("id", "cubes");
        new_div.classList.add('div1');
        document.getElementById("main_div").appendChild(new_div);
    let label = document.createElement("h2");
    label.innerHTML = "Squares game";
    new_div.appendChild(label);

    // Creating the input area + adding it to the div
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.style.width = '100px';
    input.style.height = '25px';
    input.style.position = 'flex';
    input.id = "input_cubes";
    input.placeholder = "Number of cubes";
    new_div.appendChild(input);
}
function Squares(){
    let StartingSquares = document.getElementById("input_cubes");
    console.log(StartingSquares.value);
    
    let new_div = document.createElement("div");
    new_div.setAttribute("id", "cubes");
}

export {Create_Work_Area3, Squares};