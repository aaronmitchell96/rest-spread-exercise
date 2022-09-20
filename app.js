// function filterOutOdds(){
//     var nums = Array.from(arguments);
//     console.log(nums)
//     return nums.filter(function(num){
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...nums) => Array.from(nums).filter(num => num % 2 ===0);

function findMin(...val){
    return Array.from(val).reduce((min,currVal) => currVal < min ? currVal : min);
}

function mergeObjects(a,b){
    return {...a,...b};
}

function doubleAndReturnArgs(arr, ...args){
    doubleArgs = args.map(val => val*2);
    const arrCopy = [...arr, ...doubleArgs];
    return arrCopy;
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    rand = Math.floor(Math.random() * (items.length))
    return [...items.slice(0,rand), ...items.slice(rand +1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1,...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}
