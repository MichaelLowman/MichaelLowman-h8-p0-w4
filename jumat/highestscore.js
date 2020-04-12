function highestScore (students) {
    // Code disini
     
    
    
    var kelas = []
    var nilaitinggi = {}
    var hallo = []    
   
    if(students == 0){
      return {}
    }else{
          //Mengambil data kelas pada students
         for(var i in students){
             kelas.push(students[i].class)
              
            }

            
        var kelas1 = []  // menghilangkan data ganda pada kelas
          for(a=0; a<kelas.length; a++){
              var flag = false

              for(j=0; j<kelas1.length; j++){
                  if(kelas[a] == kelas1[j]){
                      flag = true
                  }
              }
             
              if(flag == false){
               
                  kelas1.push(kelas[a])  
                  
              }
              
              
          }  
          for(var b in kelas1){
            var nilai = 0
          for(var z in students){
              if(kelas1[b] == students[z].class){
                  if(students[z].score > 75){
                      nilai = students[z].score
                      var highscore = {}
                      highscore.name = students[z].name;
                      highscore.score = students[z].score;
                       
                    
                  }
                  
              }
            
          }
          //console.log(highscore)
          nilaitinggi[kelas1[b]] = highscore
          

        }

    }
  return nilaitinggi
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}