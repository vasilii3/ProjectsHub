import * as Projects_Hub from './Projects_Hub.js';

function Create_Work_Area2(e){

    //Clearing old area and creating the new one 
    Projects_Hub.ClearProject();
    document.getElementById("button_2").addEventListener("click", Calculate);
    let input_name = 1 ; 
    let new_div = document.createElement("div");
        new_div.setAttribute("id", e);
        new_div.classList.add('div1');
        document.getElementById("main_div").appendChild(new_div);
    let label = document.createElement("h2");
    label.innerHTML = "My Calculator";
    new_div.appendChild(label);

    do{
        let input = document.createElement("input");                   // Creating the input area + adding it to the div
        input.setAttribute('type', 'text');
        input.style.width = '90px';
        input.style.height = '25px';
        input.style.position = 'flex';
        input.style.top = '25px';
        input.style.margin = '2px';
        input.id = `input_${input_name}` ; 
        input.placeholder = "Enter number";
        if(input_name == 2) 
        {
            let select = document.createElement("select");                // Creating the drop down menu
            select.setAttribute('id','choose_action');
            select.style.height = '30px';
            select.style.width = '45px';
            let options = 0;
            do { 
                let option_tag = document.createElement("option");
                option_tag.setAttribute('id',`choose_action ${options}`);           //creating the options
                switch(options)
                {
                    case 0: 
                        option_tag.innerHTML = `+`;
                    break;
                    case 1: 
                        option_tag.innerHTML = `-`;
                    break;
                    case 2: 
                        option_tag.innerHTML = `*`;
                    break;
                    case 3:
                        option_tag.innerHTML = `/`; 
                    break;
                    case 4:
                        option_tag.innerHTML = `^`; 
                    break;
                }
                option_tag.value = `${options}`;
                option_tag.style.textAlign = 'center';
                select.appendChild(option_tag);
                options++;
            }
            while(options <= 4);
            new_div.appendChild(select);
            
        }
        if(input_name == 3 ) {input.placeholder = "Result";                  // creating the result field
        input.style.width = "";
        input.style.maxWidth = "auto";}
        new_div.appendChild(input); 
        input_name++;
        if(input_name == 4 ) input.setAttribute("readonly", "readonly");
    }
    while(input_name < 4);

    var submit = document.getElementById('button_2').cloneNode( true );         //cloning the Submit button and making it run this function
    submit.addEventListener("click", Calculate);
    submit.value = "Calculate"
    new_div.appendChild(submit);

    let input_button = document.createElement("input");                //creating SAVE button
    input_button.setAttribute('type', 'button');
    input_button.id = 'input_button';
    input_button.style.position = 'flex';
    input_button.style.width = '60px';
    input_button.value = 'Save';
    input_button.addEventListener("click", Save);
    new_div.appendChild(input_button); 
}

function Calculate(){

    let choose_action = document.getElementById("choose_action").value;
    let n1 = Number(document.getElementById("input_1").value);
    let n2 = Number(document.getElementById("input_2").value);
    let n3 = document.getElementById("input_3");
    if(document.getElementById("input_1").value  || document.getElementById("input_2").value){
    switch(Number(choose_action)){
        case 0:
            n3.value = n1 + n2;
        break;
        case 1:
            n3.value = n1 - n2;
        break;
        case 2:
            n3.value = n1 * n2;
        break;
        case 3:
            n3.value = n1 / n2;
        break;
        case 4:
            n3.value = n1 ** n2;
        break;
    }
    }
}

function Save(){
    if(document.getElementById("input_3").value=="") return 0;
    let choose_action = document.getElementById("choose_action");                    //getting the value from the drop down menu               
    var options = choose_action.getElementsByTagName("option");

    let n1 = document.getElementById("input_1");
    let n2 = document.getElementById("input_2");
    let n3 = document.getElementById("input_3");
    let input_button = document.getElementById("input_button"); 
    input_button.insertAdjacentHTML('afterend', `<p> ${Number(n1.value)} ${options[choose_action.selectedIndex].innerHTML} ${Number(n2.value)} =  ${Number(n3.value)} </p>`);
    document.getElementById("input_1").value="";
    document.getElementById("input_2").value="";
    document.getElementById("input_3").value="";
}

export {Create_Work_Area2 , Calculate};