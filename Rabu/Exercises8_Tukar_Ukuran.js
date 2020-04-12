function tukarBesarKecil(kalimat) {
  // you can only write your code here!
 var hurufkecil = 'abcdefghijklmnopqrstuvwxyz 01234567890 .;-';
 var hurufBesar = hurufkecil.toUpperCase();
 var newKalimat = ''
 
 for(i=0; i<kalimat.length; i++){
     for(j=0; j<hurufkecil.length; j++){
            
        

          if(hurufkecil[j] == kalimat[i]){
              kalimat[i] = hurufBesar[j]
              newKalimat += hurufBesar[j]

          }else if(hurufBesar[j]== kalimat[i]){
              kalimat[i] =  hurufkecil[j]
              newKalimat += hurufkecil[j]
  
          }
        

     }
 }
 console.log(newKalimat)
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"