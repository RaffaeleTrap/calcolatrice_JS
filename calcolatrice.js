let numero1 = 0;
let numero2 = 0;
let sequenzaStringa = "";
let sequenzaTemp = "";
let operazione = "";


function press(numero){ //concatena i numeri...
    sequenzaStringa += numero;
    sequenzaTemp += numero;
    document.getElementById("schermo_calc").setAttribute("value", sequenzaStringa);
}

function operatore(operatore){
    operazione = operatore; 
    numero1 = parseFloat(sequenzaStringa);
    sequenzaTemp = "";
    sequenzaStringa += operatore;
    document.getElementById("schermo_calc").setAttribute("value", sequenzaStringa);
}

function risultato(){
    numero2 = parseFloat(sequenzaTemp);
    if(operazione == '+'){
        document.getElementById("schermo_calc").setAttribute("value", (numero1 + numero2));
    }
    else if(operazione == '-'){
        document.getElementById("schermo_calc").setAttribute("value", (numero1 - numero2));
    }
    else if(operazione == '*'){
        document.getElementById("schermo_calc").setAttribute("value", (numero1 * numero2));
    }
    else if(operazione == '/'){
        document.getElementById("schermo_calc").setAttribute("value", (numero1 / numero2));
    }
}

function canc(){
    document.getElementById("schermo_calc").setAttribute("value", "");
    resetschermo();
    numero1 = 0;
    numero2 = 0;
    sequenzaStringa = "";
    sequenzaTemp = "";
    operazione = "";
}

function resetschermo(){
    document.getElementById("schermo_calc").innerText = "";

}

