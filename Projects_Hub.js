import * as Calc from './Calc.js';
import * as SquaresGame from './SquaresGame.js';
import * as Conjecture from './Conjecture.js';

//Project 1 - Collatz
document.getElementById("button_1").addEventListener("click", Conjecture.Create_Work_Area);
//Project 2 - Calculator
document.getElementById("button_4").addEventListener("click", Calc.Create_Work_Area2);
//Project 3 - Squares
document.getElementById("button_5").addEventListener("click", SquaresGame.Create_Work_Area3);
//End button
document.getElementById("button_3").addEventListener("click", ClearProject);

function ClearProject(e){

    let main_div = document.getElementById('main_div');
    main_div.querySelector('div')?.remove();
    document.getElementById("button_2").removeEventListener("click", Calc.Calculate);
    document.getElementById("button_2").removeEventListener("click", Conjecture.Collatz);
    document.getElementById("button_2").removeEventListener("click", SquaresGame.Squares);
}



export {ClearProject};