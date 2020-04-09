function urutkanAbjad(str) {
    // you can only write your code here!
    var newStr=[]
    var hasilstr = ''

    for(var x = 0; x<str.length; x++){ // kenversi string menjadi array
        newStr.push(str[x]);

    }
    //console.log(newStr)
    for(i=0; i<newStr.length; i++){                // Mengurutkan array
        for(j=0; j<newStr.length; j++){

            if(newStr[j] > newStr[j+1]){

                var temp = newStr[j]
                newStr[j] = newStr[j+1]
                newStr[j+ 1] = temp 

            }
        }
    }

    for (z=0; z<newStr.length; z++){  //menjadikan array yang sudah ter sorting kembali menjadi string
        hasilstr += newStr[z]
    }
     return hasilstr
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'