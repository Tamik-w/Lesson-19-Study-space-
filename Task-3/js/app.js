let number = prompt("Please enter your number: ", "0");

    if(+number >= 1){
        newNumber = number * 12;
        alert(`${number} by 12 equal ${newNumber}`)
    }
    else if(+number !== Number){
        while(+number !== Number){
            number = prompt("Your number is incorect, please enter correect number: ", "0");

            if(+number >= 1){
                newNumber = number * 12;
                alert(`${number} by 12 equal ${newNumber}`)
                break;
            }
        }
    }