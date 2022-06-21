var iterations = 0; 
var myArray = [];
var bigNum = {
        position: 1 ,
        size: 0
    };
var Collatz_text = "The Collatz's conjecture is an unsolved problem in mathematics. It is named after Lothar Collatz in 1973. The algorithm is: take any positive integer n, if n is even then divide it by 2,else do  3n+1. The conjecture is that for all positive numbers(and almost all negative), this process converges to the number 1 ";

//function CheckProject(project){
 //   let new_div = document.getElementById('main_div')?.querySelector('div');
  //  console.log(project);
  //  if(new_div == undefined) return 0;
 //   if(project == new_div) return 0;
 //   else    { ClearProject(new_div?.id), Create_Work_Area(new_div?.id) }
 //  if(new_div?.id != project ) 
  //  { 
       ClearProject(new_div?.id);
       Create_Work_Area(new_div?.id);  
  // }
    

//}

function ClearProject(input){
    if(input) document.getElementById(input)?.remove();
    let inner_div = document.getElementById('main_div').querySelector('div');
    if(inner_div) inner_div.outerHTML="";
}


 /* function Create_Work_Area(input){
    if(document.getElementById('con'))
    {
    var new_div = document.createElement("div");
    new_div.setAttribute("id", input);
    new_div.classList.add('div1');
    document.getElementById("main_div").appendChild(new_div);
    }
    let new_div = document.getElementById('con');
    let input_value = document.createElement("input");                   // Creating the input area + adding it to the div
    input_value.setAttribute('type', 'text');
    input_value.id = "input" ; 
    input_value.placeholder = "Enter your number here";
    new_div.appendChild(input_value);                                    
    document.getElementById("main_div").appendChild(new_div);
    
    let new_p = document.createElement('p');                        // creating the text area + adding it to the div
    new_p.textContent = Collatz_text;
    new_div.appendChild(new_p);

    let new_image = document.createElement('img');               // creating the IMAGE element + adding it to the div
    new_image.setAttribute('src','collatz.png');
    new_div.appendChild(new_image); */
}   












function Create_Work_Area(){
    if(!document.getElementById('con'))
    {
        var new_div = document.createElement("div");
        new_div.setAttribute("id", "con");
        new_div.classList.add('div1');
        document.getElementById("main_div").appendChild(new_div);
    }
    else {
        var new_div = document.getElementById('con');                       //clearing the DIV and the INPUT
        new_div.innerHTML = "";

    }
    let input = document.createElement("input");                   // Creating the input area + adding it to the div
    input.setAttribute('type', 'text');
    input.id = "input" ; 
    input.placeholder = "Enter your number here";
    new_div.appendChild(input);                                    
    document.getElementById("main_div").appendChild(new_div);
    
    let new_p = document.createElement('p');                        // creating the text area + adding it to the div
    new_p.textContent = Collatz_text;
    new_div.appendChild(new_p);

    let new_image = document.createElement('img');               // creating the IMAGE element + adding it to the div
    new_image.setAttribute('src','collatz.png');
    new_div.appendChild(new_image);
}   

function Collatz(input){
    let results_div = document.getElementById('con');           // Checking if the Div field for results is created
    let starting_number = Number(input || document.getElementById('input')?.value);   //Check if the function has been ran before and transfer value
        if(starting_number>bigNum.size)
        { 
            bigNum.size=starting_number ; 
            bigNum.position = iterations;
        }
    if(results_div && iterations == 1){                         // Making the field and input empty for a new run
        let input = document.getElementById('input')
        input.value = "";
        results_div.innerHTML = "";
        results_div.appendChild(input);
    }
    if (starting_number == 0 || isNaN(starting_number) == 1 || starting_number%1 !== 0) return 0;         // Break of the function in case  of invalid data (-5, - 17 still break it)
    if(starting_number%2) { 
        myArray.push(`<p> ${starting_number} is ODD  = =  > `);
        if(starting_number == 1 || starting_number == -1) { 
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
            Collatz(starting_number);
            
        }
     } 
    else {
        myArray.push(`<p> ${starting_number} is EVEN  = =  > `);
        iterations++;
        starting_number = starting_number / 2 ;
        myArray.push(`Dividing by two = = > result is ${starting_number}  </p>`);
        Collatz(starting_number);
    }
}

