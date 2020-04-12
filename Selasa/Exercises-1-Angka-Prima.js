function angkaPrima(angka) {
    // you can only write your code here!
    var jumlahF = 0;
    for(i=1; i<=angka; i++){
        if(angka%i == 0){
            jumlahF++ //jumlah hasil modulus angka dengan angka dibawahnya dan juga angka itu sendiri
        }
    }
    if(jumlahF == 2){
        return angka + ' ' + true 
    }else
        return angka + ' ' + false
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false