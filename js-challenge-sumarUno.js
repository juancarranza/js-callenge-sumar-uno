/*Business Rules: 
    1.) 1 <= digitos.length <= 100
    2.) 0 <= digitos[i] <= 9 (if is an Integer)
    3.) los dígitos no contienen ceros a la izquierda.
*/
function validateRestrictions(input){
        //2.) 0 <= digitos[i] <= 9 (if is an Integer)
        if(validateIsInteger(input)){
            //1.) 1 <= digitos.length <= 100 AND 3.) los dígitos no contienen ceros a la izquierda.
            if(input.toString().length >= 1  && input.toString().length <=100){
                //The input pass the restrictions.
                if (input.toString().startsWith("0") && input.toString().length > 1){
                    return false;
                }else{
                    return true;
                }
                
            }else{
                console.log("The input does not met the requirements.");
                return false;
            }

        }else{
            console.log("The input does not met the requirements, the input is not an integer number.");
            return false;
        }
        
}//end ValidateRestrictions

function validateIsInteger(inputArgument){

    const strInput=inputArgument.toString().trim();
    for(let i=0;i<strInput.length;i++){
        console.log(strInput[i]);
        switch(strInput[i]) {
            case "1":
                // code block
                break;
            case "2":
                // code block
                break;
            case "3":
                // code block
                break;
            case "4":
                // code block
                break;
            case "5":
            // code block
            break;
            case "6":
                // code block
                break;
            case "1":
                // code block
            break;
            case "7":
                // code block
                break;
            case "8":
                // code block
                break;
            case "9":
                // code block
                break;
            case "0":
                    // code block
                break;
            default:
                // code block
                return false;
                break;
            }

    }
    return true;

}


function arrayToString(arrayDigitos){

    let strDigitos="";

    for (let x=0;x<arrayDigitos.length;x++){
        strDigitos=strDigitos+arrayDigitos[x];
    }

    strDigitos=strDigitos.trim();
    console.log(strDigitos);

    return strDigitos;

}

function intToArray(intDigito){
    const strDigito=intDigito.toString();
    let arrayDigit=[];
    for(let i=0;i<strDigito.length;i++){
        arrayDigit.push(parseInt(strDigito[i]));
    }
    return arrayDigit;

}

function sumaUno(digitos){

    const strDigit=arrayToString(digitos);
    if(validateRestrictions(strDigit)){
        const intDigit=parseInt(strDigit);//convert the string to integer
        const plusOne=intDigit+1;//calculate 
        return intToArray(plusOne);

    }else{
        console.log("The input does not met the requirements, the input is not an integer number.");
        return "The input does not met the requirements, the input is not an integer number.";
    }
}


function clickSumaBtn(){
    const entrada = document.getElementsById('entrada');
    sumaUno(entrada);
}