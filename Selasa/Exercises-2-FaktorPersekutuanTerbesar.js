function fpb(angka1, angka2) {
    // you can only write your code here!
    var hasil1 = [];
    var hasil21 = [];
    var hasil= '';
    var hasil2= '';
    var final = [];
   // for(i=0; i<angka1; i++){

       for(i=0; i<angka1; i++){

         if(angka1%i == 0){
                
                hasil1.push(i)
                
            } 
       }
        
         for(j=0; j<angka2; j++){
               
            if(angka2%j == 0){
              
              hasil21.push(j)
              
            }
            
        
        } 
       
         
         for(a=0; a<hasil1.length; a++ ){
           for(b=0; b<hasil21.length; b++){

           
           
          
          // for(b=0; b<hasil21; b++){

             if(Number(hasil1[a]) == Number(hasil21[b])){
                final.push(hasil1[a])
             }
           }
         }
       
        //console.log('ini FPB angka1'+ ' = ' +hasil1)
        //console.log('ini FPB hasil21' + ' = ' + hasil21)
        
  return final[final.length-1]
}

  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1