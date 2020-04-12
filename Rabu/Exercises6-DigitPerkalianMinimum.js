function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = [];
    var digit = [];
    
    
   for(var i=1; i<=angka; i++){
        

        for(var j=1; j<=angka; j++){
          if((i*j) == angka){
            
            faktor.push(i + '' + j)
            
            
          }       
    }

}

   for(var k=0; k<faktor.length; k++){
          //console.log(k)
        digit.push(faktor[k].length)

       }
    for(var z=0; z<digit.length; z++){
     // for(var x=0; x<digit.length; x++){

      
      if(digit[z]<digit[z+1]){
        return digit[z]
      }else if(digit[z] == digit[z+1] && !(digit[z] < digit[z+1])){
        return digit[z]

      }
       

    //}
    }

   
  console.log(digit)

  //console.log(digit)
  //console.log(min)
  //console.log(faktor)
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2