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

// function maxStr(maximum){
//     let max = maximum[0];
//   for(let item of maximum){
//     if(max.length < item.length){
//         max = item;
//     }
//   }
//   return max;
// }
 
//  let str = "I am learning Programming to become a programmer";
//  let splitStr = str.split(" ");
//  let convertMath = splitStr;
// console.log(maxStr(convertMath));





// Task-6
//******************************************************************/

// console.log(Math.round(Math.random() * 10 + 10));

// Task-6
//******************************************************************/

// function findLargeWord(maximum){
//     console.log(maximum.length[0]);
//     // for(let num of maximum){
//     //     console.log(num.length)
//     // }
//     // return max;
// }

// let str = "I am learning Programming to become a programmer";
// let splitStr = str.split(" ");
// console.log(findLargeWord(splitStr));



// Task-7
//******************************************************************/

// function mini(numbers){
//     let minimum = numbers[0];
//     for(let num of numbers){
//         if(minimum > num){
//             minimum = num;
//         }
//     }
//     return minimum;
// }
// let miniNumbers = [20,30,49,60,80,10];
// console.log(mini(miniNumbers));


// Task-8
//******************************************************************/

// const heights2 = ['rahim', 'robin', 'rafi', 'ron',  'rashed'];

// let compareLen = heights2[0];
// for(let num of heights2){
//     if(compareLen.length > num.length){
//         compareLen = num;
//     }
   
// }
// console.log(compareLen);

// Task-9
//******************************************************************/


// function calculateElectronicsBudget(quantity){
//    let laptop = 35000;
//    let tablet = 15000;
//    let mobile = 20000;
//    let laptopPrice = laptop * quantity;
//    let tabletPrice = tablet * quantity;
//    let mobilePrice = mobile * quantity;
//    let amount = laptopPrice + tabletPrice + mobilePrice;
//    return amount
// }
// console.log(calculateElectronicsBudget(5));



// Task-10
//******************************************************************/

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phone){
    let sum = 0;
    let aver = [];
    for(const items of phone){
       sum += items["price"];
    }
    for(const price of phone){
        aver.push(price.price);
    }
    let result = Math.round(sum / aver.length);
    return result;
}

const itemStor = findAveragePhonePrice(phones);
console.log(itemStor);