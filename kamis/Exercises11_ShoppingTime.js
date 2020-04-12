function shoppingTime(memberId, money) {
  // you can only write your code here!
  var obj = {}
  obj.memberID = memberId
  obj.money  = money
  obj.listpurchased = []
  obj.changeMoney = money
  if(memberId == '' || memberId == undefined || money == undefined){
    return ('Mohon maaf, toko x hanya berlaku untuk member saja');
 }else if(money < 50000 ){
    return ('Uang anda tidak cukup');
 }else{

    
    
    var flag = true
    while(money>0 && flag == true){
        if(money >= 1500000){
            obj.listpurchased.push('Sepatu Stacattu')
            obj.changeMoney -= 1500000
            flag = true
          }

        if(money >= 500000){
            obj.listpurchased.push('Baju Zoro')
            obj.changeMoney -= 500000
            flag = true
        }

        if(money >= 250000){
          obj.listpurchased.push('Baju H&N')
          obj.changeMoney -= 250000
          flag = true
        }

      if(money >= 175000){
          obj.listpurchased.push('Baju Uniklooh')
          obj.changeMoney -= 175000
          flag = true
        }

        if(money >= 50000){
          obj.listpurchased.push('Casing Handphone')
          obj.changeMoney -= 50000
          flag = true
        }


          flag = false

    
    }
    
    
    



  

   } 
   return obj;    
}




// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja