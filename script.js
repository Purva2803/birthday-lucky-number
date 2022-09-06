const dateofBirth = document.querySelector ("#date-of-birth");
const luckynumber = document.querySelector("#lucky-number");
const checkbutton = document.querySelector("#check-btn");
const outputbox = document.querySelector("#output-box");

function compareValues(sum,luckynumber){
    if(sum%luckynumber === 0){
        outputbox.innerText = "your birthday is lucky  💗";

    }
    else{
        outputbox.innerText ="try another lucky number 😉" ;
}
}

function luckyBirthdate(){

    const bdate = dateofBirth.value;
    const sum = calculateSum(bdate);
    if(sum && bdate){ 
    compareValues(sum,luckynumber.value);
    }
    else
    {
    outputbox.innerText = "please enter both the fields"  ;  
}
}

function calculateSum(bdate){
    bdate = bdate.replaceAll("-","");
    let sum = 0 ;
    for(let index=0;index<bdate.length;index++){
        sum = sum + Number(bdate.charAt(index));
    }

    return sum;

}


checkbutton.addEventListener('click',luckyBirthdate);