function changeMe(arr) {
    // you can only write your code here!
   var nama = ''
    if(arr == ''){
       console.log('""')
   }else{
    
    for(var i=0; i<arr.length; i++){

      nama = arr[i][0] +' '+ arr[i][1]
      console.log((i+1) + ' ' + nama )
        var obj = {
           
            firstName : arr[i][0],
            lastName  : arr[i][1],
            gender    : arr[i][2],
            age       : arr[i][3], 
            }

    if(obj.age !== undefined && obj.age < 2020 ){
        obj.age = 2020 - obj.age
    }else if(obj.age == undefined || obj.age > 2020){
        obj.age = 'invalid birth year'
    }
    
    console.log(obj) 

   }
}  
   
  }
  
  // TEST CASES
 changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male'], ['Jhon', 'Downey', 'Male',2021]]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""