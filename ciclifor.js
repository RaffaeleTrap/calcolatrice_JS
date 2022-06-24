 //cicli -> for
 // foe (variabile contatore=valore iniziale;condizione;operazione)


// i   msg 
// 0 / poc
// 1 / tant
// 2 / tant
// 3 / tant
// 4 / non succede nulla

//for(i=0;i<10;i++);

let numeri = [14,21,28,33];
min = Infinity;
for(i=0;i<4;i++){
    if(numeri[i] < min){
        min = numeri[i];
    }
}
console.log(min);

let numeri = [33,100,50,55,77,78,65,55,55,55,55,34,5,6,2,1,43,5];//da controllare 
min=Infinity;
for (i=0;i<18;i++){ //al posto di i<18 si puo usare numeri.lneght
    //if(min>numeri[i]) min=numeri[i];
    if(numeri[i] < min){
        mim = numeri[i];
    }
}
console.log("sono il piu piccolo " + min);



//fibonacci

//112358...
primo=1;
secondo=1;
console.log(primo);
console.log(secondo);

for (i=2;i<10;i=i+1){
    
   terzo = primo+secondo;
   primo = secondo;
   secondo = terzo;
   console.log(terzo);
    
    
}


//ESERCIZI MASSIMO 8/06/22
//4 elementi in un array stampa i pari
numeri = [10,47,29,12];

for(i=0;i<numeri.length;i++){
    if(numeri[i] % 2 == 0){
        console.log(numeri[i]);
    }
}

//array di 6 elementi stampa solo dispari maggiore di 5
numbers = [11,8,5,2,505,44];

for(i=0;i<numbers.length;i++){
    if(numbers[i] > 5 && numbers[i] % 2 > 0){
        console.log(numbers[i]);
    }
}

//ESERCIZIO SASSI

var sassi = [467,555,111,747];
min = sassi [0];
var indice;

for(i=0; i<sassi.length; i++){
    if (sassi[i]<=min) {
        min = sassi[i];
        indice=i;
        
    }
}
console.log(indice);

//NUMERI MODA
//trova la moda tra 5 valori 
valori = [1,3,4,5,5];
var cont = 0;
var cont_grande = 0;
var numergrande = 0;

 for(i = 0; i<valori.length; i++){
     cont=0;
     for(j = 0; j<valori.length; j++){
         if(valori[i] == valori[j]){
             cont=cont+1;
         }
     }
    // console.log("il valore " + valori[i] + " si ripete " + cont);
     if(cont > cont_grande){
         numergrande=valori[i];
         cont_grande = cont;
     }
 }
console.log("il valore " + numergrande + " si ripete " + cont_grande);


//SOMMA E MEDIA TRA 2 ARRAY

arr1 = [3,4,5,6,7];
arr2 = [8,7,9,10,11];
arr_all = [];

function fill(arr1,arr2,arr_all){
    for (i=0; i<arr1.length; i++){
        arr_all.push(arr1[i]);
    }
    for (i=0; i<arr2.length; i++){
        arr_all.push(arr2[i]);
    }
    
    return arr_all;
}
fill(arr1,arr2,arr_all);
console.log(arr_all);
tot = 0;
for (i=0; i<arr_all.length;i++){
    tot = tot + arr_all[i];
}
console.log("IL TOTALE è " + tot);

risultato=tot/arr_all.length;
console.log("LA MEDIA è " + risultato);

//SOMMA E MEDIA TRA 2 ARRAY + RICERCA STESSO NUMERO IN DUE ARRAY
let item1=[1,2,3,4,5];
let item2=[6,7,4,9,10];
item_all=[];

function fill(item1,item2,item_all){
    for(i=0;i<item1.length;i++){
        item_all.push(item1[i])
    }

    for(i=0;i<item2.length;i++){
        item_all.push(item2[i])
    }
   return item_all;
}


function media(item1,item2,item_all){
    console.log(item_all);
    tot=0;
    for(i=0;i<item_all.length;i++){
        tot=tot+item_all[i];
        media=tot/10;
    }
    console.log("La media è: "+media);
    console.log("Il totale è: "+tot);
}

function meer(item1,item2){
    var doppio=0;
    for(i=0;i<item1.length;i++){
        for(j=0;j<item2.length;j++){
            if(item1[i]==item2[j]){
                doppio=item2[j];
            }
        }
    }
    return doppio;
}

fill(item1,item2,item_all);
doppio=meer(item1,item2);
if(doppio!=0){
    console.log(doppio);
}else{
    media(item1,item2,item_all);
}