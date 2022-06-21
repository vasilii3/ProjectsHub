import * as Projects_Hub from './Projects_Hub.js';

var iterations = 0; 
var myArray = [];                                                 //this holds all the info from running Collatz
var bigNum = {                                                    // tracking the biggets numbers and its position
        position: 1 ,
        size: 0
    };
var Collatz_text = "The Collatz's conjecture is an unsolved problem in mathematics. It is named after Lothar Collatz in 1973. The algorithm is: take any positive integer n, if n is even then divide it by 2,else do  3n+1. The conjecture is that for all positive numbers(and almost all negative), this process converges to the number 1 ";


function Create_Work_Area(e){

    //Clearing old project and re-assigning the purpose of the Start Button
    Projects_Hub.ClearProject();
    document.getElementById("button_2").addEventListener("click", Collatz);

    //defining the new project area
    var new_div = document.createElement("div"); 
    new_div.classList.add('div1');

    // Creating the input area + adding it to the div
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.id = "input" ; 
    input.placeholder = "Enter your number here";
    new_div.appendChild(input);                                    
    
    // creating the default text area + adding it to the div
    let new_p = document.createElement('p');
    new_p.textContent = Collatz_text;
    new_div.appendChild(new_p);

    // creating the default IMAGE element + adding it to the div
    let new_image = document.createElement('img');
    new_image.setAttribute('src','collatz.png');
    new_div.appendChild(new_image);

    //adding the new_div to the main_div
    document.getElementById("main_div").appendChild(new_div); 
}   

function Collatz(e,input){

    // Selecting the Div for results
    let results_div = document.getElementById('main_div').querySelector('div'); 
    //Check if the function has been ran before and transfer value
    let starting_number = input || Number(document.getElementById('input')?.value);  
  
    //Checking for the biggest number so far and its position
    if(starting_number > bigNum.size)
    { 
        bigNum.size = starting_number ; 
        bigNum.position = iterations;
    }

    // Break of the function in case  of invalid data (-5, - 17 still break it)
    if (starting_number <= 0 || isNaN(starting_number) == 1 || starting_number%1 !== 0 ) return 0;
    //The collatz algo
    if(starting_number%2) { 
        myArray.push(`<p> ${starting_number} is ODD  = =  > `);
        if(starting_number == 1) { 
            myArray.push(`End of sequence : Accumulated score(loops) =  ${iterations}  </p>`);
            myArray.push(`<h1>The biggest number was ${bigNum.size} reached on step ${bigNum.position} </h1>`);
            myArray.unshift(document.getElementById('input').outerHTML);
            results_div.innerHTML = myArray.join('');
            myArray = [] ;
            console.log(bigNum);
            console.log(iterations);
            iterations = 0;
            bigNum.size = 0;
            bigNum.position = 1;
        }
        else {
            iterations++; 
            starting_number = ( starting_number * 3 ) + 1 ;
            myArray.push(`Multiplying by 3 and adding 1 = = > result is ${starting_number}  </p>`);
            Collatz(0,starting_number);
            
        }
     } 
    else {
        myArray.push(`<p> ${starting_number} is EVEN  = =  > `);
        iterations++;
        starting_number = starting_number / 2 ;
        myArray.push(`Dividing by two = = > result is ${starting_number}  </p>`);
        Collatz(0,starting_number);
    }
}

export {Create_Work_Area, Collatz};