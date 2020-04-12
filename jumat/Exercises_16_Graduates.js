function graduates (students) {
    // Code disini
    var lulus = {}
    var kelas = []
    //var class = []
    var jumlahlulus = 0
    var tidaklulus = [] 
    var class1 = []
    var raport = [];
    
    for(var i in students){
        if(students[i].score>75){
            jumlahlulus++
        }
        
    }
    console.log(jumlahlulus)
  
    if(students === 0 ){
      return  lulus;
  
      }
   if(jumlahlulus == 0){
      //return lulus[students[i].class] = []
      }else{
  
                   //mengambil nama kelas pada students
                  for(var i in students){
                         
                              kelas.push(students[i].class)
                          }
                              //console.log(kelas)
  
              //     //membuang data ganda pada kelas
              //     for(var j =0 ; j<kelas.length; j++){
                      
              //         var flag = false
                      
              //     for(var z=0; z<class1.length; z++){
              //          if(kelas[j] == class1[z]){
              //              flag = true;
              //          }   
              //      }
  
              //      if(flag == false){
              //         class1.push(kelas[j])
                      
                      
              //     }
                   
              //  }  //console.log(class1)
  
  
           for(var a =0 ; a<kelas.length; a++){
               for(var b in students){
                  
                if(kelas[a] == students[b].class){
                if(students[b].score > 75){

                    var rapor = {}
                    rapor.name = students[b].name;
                    rapor.score = students[b].score;
                    raport.push(rapor)
                    lulus[students[b].class] = rapor
                    
                    
                    }

                    
                  }  
                
               }
            //console.log(rapor)
          // lulus[class1[a]] = raport
           //console.log(raport)    
          //console.log(rapor)              
      }
    
    return lulus
  
  
  }
}
  
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}