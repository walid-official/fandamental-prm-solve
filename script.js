// Task-1
//***************************************************************** */

// level-1
//***********

// let c = Number(prompt("Enter Your C :"));
// let multi = c * 9;
// let divide = multi / 5;
// let result = divide + 32;
// console.log(result);



// level-2
//***********

// function celsius(){
//     let c = 10;
//     return c;
//   }
  
//   function multi(){
//      let product = celsius() * 9;
//      return product;
//   }
  
//   function divide(){
//       let divid = multi() / 5;
//       return divid;
//    }
  
//    function tempResult(){
//       let result = divide() + 32;
//       return result;
//    }
  
//   console.log(tempResult());
  

// level-3
//***********


// function multi(temp){
//     let product = temp * 9;
//     let divide = product / 5;
//     let result = divide + 32;
//     return result;
// }

// let c = Number(prompt("Enter Your C :"));
// let resultC = multi(c);
// console.log(resultC);



// Task-2
//******************************************************************/



// function mileTokilo(kiloNum){
//     let kilometer = kiloNum * 1.60934;
//     return kilometer;
// }

// console.log(mileTokilo(12));

// Task-3
//******************************************************************/


// je array ache shetar vitor jodi reapet thake tahole shata tumi otake akta array ar vitor store korbe;

// function myNumbers(num1,num2){
//     const arr = [];
//     for(let number of num1){
//         if(number !== num2){
//             continue;
//         }
//         arr.push(number);
//     }
//     return arr.length;
// }
// let numbers = [5,6,11,12,98,5,5];
// console.log(myNumbers(numbers,5));



// Task-4
//******************************************************************/


// function findVowel(vowel1,vowel2){
//     // let vowelCount = ""
//     let vowelArray = [];
//  for(let item of vowel2){
//     if(vowel1.includes(item)){
//         // vowelCount += item;
//         vowelArray.push(item);
//     }    
//  }
//  console.log(vowelArray);
//  let len = "The Length of this sentence is " + vowelArray.length; 
//  return len;
// }
// let str = "hello my name is walid hasan";
// let vowel = ["a","e","i","o","u"];
// console.log(findVowel(str,vowel));



// Task-5
//******************************************************************/

// function maxStr(str1,str2){
//    for(let item of str1){
//     if(item.length === str2){
//         console.log(item)
//     }
//    }
// }

// let str = "I am learning Programming to become a programmer";
// let splitStr = str.split(" ");
// let convertMath = Math.max(splitStr[0].length,splitStr[1].length,splitStr[2].length,splitStr[3].length,splitStr[4].length,splitStr[5].length,splitStr[6].length,splitStr[7].length);
// maxStr(splitStr,convertMath);



// Task-6
//******************************************************************/

console.log(Math.round(Math.random() * 10 + 10));
