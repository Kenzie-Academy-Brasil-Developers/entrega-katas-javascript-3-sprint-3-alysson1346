const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(num) {
    let array = [];
    for(let i = 1; i <= num; i++){
        array.push(i)
    }  
    return array  
}
console.log(kata1(25))

/* ============================================================================================================== */

function kata2(num) {
    let array = [];
    for(let i = num; i >= 1; i--){
        array.push(i)
    } 
    return array
}
console.log(kata2(25))

/* ============================================================================================================== */

function kata3(num) {
    let array = [];
    for(let i = 1; i <= num; i++){
        array.push(-i)
    }  
    return array  
}
console.log(kata3(25))

/* ============================================================================================================== */

function kata4(num) {
    let array = [];
    for(let i = num; i >= 1; i--){
        array.push(-i)
    } 
    return array
}
console.log(kata4(25))

/* ============================================================================================================== */

function kata5(num) {
    let array = [];
    for(let i = num; i >= 1; i--){
        if(i % 2 === 1){
        array.push(i)
        }
    }

    let arrayNegativo = [];
    for(let i = 1; i <= num; i++){
        if(i % 2 === 1){
        arrayNegativo.push(-i)
        } 
    }
    arrayCompleto = array.concat(arrayNegativo)  
    return arrayCompleto
}

console.log(kata5(25))

/* ============================================================================================================== */

function kata6(num) {
    let array = [];

  for(let i = 0; i <= num; i++){
      if(i % 3 === 0){
        array.push(i)
      }
  }
  return array
}

console.log(kata6(100))

/* ============================================================================================================== */


function kata7(num) {
    let array = [];
    
    for(let i = 1; i <= num; i++){
        if(i % 7 === 0){
            array.push(i) 
        }
    }
    return array
}

console.log(kata7(100))

/* ============================================================================================================== */

function kata8(num) {
    let array = [];

    for(let i = num; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            array.push(i) 
        }
    }
    return array
}

console.log(kata8(100))

/* ============================================================================================================== */

function kata9(num) {
   let array = [];

   for(let i = 1; i <= num; i++){
       if (i % 5 === 0 && i % 2 === 1){
           array.push(i)
       }
   }
   return array
}

console.log(kata9(100))

/* ============================================================================================================== */

function kata10() {
    let array = sampleArray
    return array
}
console.log(kata10())

/* ============================================================================================================== */


function kata11() {
   let array = sampleArray;
   let result = [];

   for(let i = 0; i < array.length; i++){
       if(array[i] % 2 === 0){
           result.push(array[i])
       }
   }
   return result

}
console.log(kata11())

/* ============================================================================================================== */

function kata12() {
    let array = sampleArray;
    let result = [];
 
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            result.push(array[i])
        }
    }
    return result
 
 }
 console.log(kata12())

/* ============================================================================================================== */


function kata13() {
    let array = sampleArray;
    let result = [];
 
    for(let i = 0; i < array.length; i++){
        if(array[i] % 8 === 0){
            result.push(array[i])
        }
    }
    return result
 
 }
 console.log(kata13())

/* ============================================================================================================== */


function kata14() {
    let array = sampleArray;
    let result = [];
 
    for(let i = 0; i < array.length; i++){
        result.push(array[i] * array[i])
    }
    return result
 
 }
 console.log(kata14())

/* ============================================================================================================== */

function kata15(num) {
    let total = 0;
    
    for(let i = 1; i <= num; i++){
        total += i
    }
    return total
}

console.log(kata15(20))


/* ============================================================================================================== */


function kata16() {
    let array = sampleArray;
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i]
    } 
    return total   
}

console.log(kata16())

/* ============================================================================================================== */


function kata17() {
    let array = sampleArray;
    let menorNum = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] < menorNum){
            menorNum = array[i]
        }
        
    }
    return menorNum
}
console.log(kata17())

/* ============================================================================================================== */


function kata18() {
    let array = sampleArray;
    let maiorNum = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] > maiorNum){
            maiorNum = array[i]
        }
        
    }
    return maiorNum
}
console.log(kata18())

/* ============================================================================================================== */


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
