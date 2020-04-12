function cariModus(arr) {
  // you can only write your code here!
  var jumlahulang =0
  var modus=[];
  var modus1= '';
  for(i=0; i<arr.length; i++){
      for(j=arr.length; j>0; j--){
        if(arr[i] === arr[j] && i != j){
            modus.push(arr[i])
            
            jumlahulang++ 
            
        }
      }
  }

for(var a=0; a<arr.length; a++){
    
                 if(jumlahulang == 2 || jumlahulang == 1 || modus[a] !== modus[a+1]){
                
                       return modus[0]
            
                    }else if(jumlahulang > 4 && modus[a] == modus[a+1] ){
                        
                        return -1

                   } else if(jumlahulang == 0){
                     return -1
                    }


 }

 
  
  


}


// TEST CASES
 console.log(cariModus([10, 4, 5, 2, 4])); // 4
 console.log(cariModus([5, 10, 10, 6, 5])); // 5
 console.log(cariModus([10, 3, 1, 2, 5])); // -1
 console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
 console.log(cariModus([7, 7, 7, 7, 7])); // -1
 