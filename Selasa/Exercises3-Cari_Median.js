function cariMedian(arr) {
    // you can only write your code here!
    var median = 0;
    var hasil = 0;
    var posisi = 0;
    posisi = Math.floor((arr.length-1)/2)
    //console.log(posisi)
if(arr.length%2==0){
       
     hasil = (arr[posisi] + arr[posisi+1])/2
 

    
}else{

    hasil = arr[posisi]
}

//console.log(hasil)
return hasil



}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5