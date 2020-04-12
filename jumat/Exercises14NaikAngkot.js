function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
        
        var angkot={}
        var panjang = 0      
        var ongkos = 2000;
        var totalongkos = 0;
        var posisiawal = 0;
      var posisiakhir =0;  
      var pendapatan = []
  
     if(arrPenumpang == 0){
       return pendapatan
     } else {
       for(i=0; i<arrPenumpang.length; i++){
     
      var awal = arrPenumpang[i][1];
      var tujuan = arrPenumpang[i][2];
            
      for(j=0; j<rute.length; j++){
              
        if(awal == rute[j]){
         posisiawal = j 
         //console.log(posisiawal)   
        }
        if(tujuan == rute[j]){
            posisiakhir = j
            //console.log(posisiakhir)
        }
      } 
      
      // angkot.Penumpang = arrPenumpang[i][0]
      //console.log(angkot['Penumpang'])
     
      //console.log(posisiawal)
      //console.log(posisiakhir)
      panjang = posisiakhir - posisiawal;
       totalongkos = ongkos * panjang
      angkot = {}
  
      angkot.penumpang = arrPenumpang[i][0];
      angkot.naikDari = awal
      angkot.tujuan = tujuan
      angkot.bayar = totalongkos
      //console.log(angkot)
      
      pendapatan.push(angkot)
  
      }
  
      
      return pendapatan
  
     }
    
    //return panjang
    //your code here 
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]