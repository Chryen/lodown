'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Designed to return the value that was passed in unchanged.
 * 
 * @param {value} value: Any value that will be returned unchanged.
 * @return {value}: The value to be returned unchanged.
 */
 function identity(value){
     return value;
 }
 module.exports.indentity = identity;
 
 /**
  * typeOf: Designed to return the type of the value in string format.
  * 
  * @param {value} value: Any value that will be used to determine the type of.
  * @return {string}: The string of the name of the typeo of value.
  */
 function typeOf(value){
    if(typeof value === 'string'){
        return 'string';
    } else if(Array.isArray(value)){
        return 'array';
    } else if(typeof value === 'undefined'){
        return 'undefined';
    } else if(typeof value === 'number'){
        return 'number';
    } else if(typeof value === 'boolean'){
        return 'boolean';
    } else if(value === null){
        return 'null';
    } else if(typeof value === 'function'){
        return 'function';
    } else{
        return 'object';
    }
}
 module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first set of elements in an array.  The amount
 * of elements returned depends on what is passed through the number parameter.
 * If number specifies 2, the function will return the first 2 elements of the array
 * (array[0] and array[1]).  If array is not an array, however, the function will return
 * an empty array [].  
 * 
 * @param {array} array: The array that will be used to return certain elements.
 * @param (number) number: The number of elements that should be returned from the array.
 * @return {array}: The array that contains the first set of numbers that is defined by the value of number.
 */
function first(array, number){
    if(!Array.isArray(array)){
        return [];
    } else if(typeof number !== 'number'){
        return array[0];
    } else if(number > array.length){
        let arr = [];
        for(let i = 0; i < array.length; i++){
        arr.push(array[i]);
        }
        return arr;
    } else if(number > 0){
        let arr = [];
        for(let i = 0; i < number; i++){
        arr.push(array[i]);
        }
        return arr;
    } else{
        return [];
    }
}
 module.exports.first = first;

/**
 * last: Designed to return the last set of elements in an array.  The amount of
 * elements returned depends on what is passed through the number parameter.
 * If number specifies 2, the function will return the last 2 elements of the array.
 * If array is not an array, however, the function will return an empty array [].  
 * 
 * @param {array} array: The array that will be used to return certain elements.
 * @param (number) number: The number of elements that should be returned from the array.
 * @return {array}: The array that contains the last set of numbers.
 */
 function last(array, number){
    if(!Array.isArray(array)){
        return [];
    } else if(typeof number !== 'number'){
        return array[array.length - 1];
    } else if(number > array.length){
        return array;
    } else if(number > 0){
        return array.slice(-number, number + 1);
    } else{
        return [];
    }
}
 module.exports.last = last;
 
 /**
  * indexOf: Designed to return the index of the array that is the first occurance of
  * <value>.  It should also return -1 if <value> is not in array.
  * 
  * @param {array} array: The array that will be checked by value.
  * @param {value} value: The value that will be used to check if array has a similar value.
  * @return {index}: The index of the array that is the first occurance of value.
  * @return (number): Return -1 if value does not exist in array
  */
 function indexOf(array, value){
    for(var i = 0; i < array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

 /**
  * contains: Designed to return true if the array contains <value>.  If <value> does 
  * not exist inside array, return false.
  * 
  * @param {array} array: The array that will be checked by value.
  * @param {value} value: The value that will be used to check if array has a similar value.
  * @return (boolean): Return true if array contains value, else false
  */
 function contains(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
* unique: Designed to return a new array of all elements from <array> with 
* duplicates removed.
* 
* @param: {array} array: The array over which to iterate and remove duplicates
* @return: {array}: A new array of all elements from array after using Set
*/
function unique(array){
    return [...new Set(array)];
}
module.exports.unique = unique;

/**
* filter: Designed to call function <test> for each element in <array> passing
* the arguments: the element, it's index, <array>.  It should also return a new
* array of elements for which calling <function> returned true.
* 
* @param {array} array: The array over which to iterate.
* @param {function} test: The function to be applied over each element in 
* <array>.
* @return {array}: New array of elements for which calling function returned true.
*/
function filter(array, test){
    var newArr = [];
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports.filter = filter;

/** 
* reject: Designed to return a new array of elements for which calling <function>
* returned false.  The <function> must be called for each element in <array>
* passing arguments: the element, it's index, <array>.  This is the logical
* inverse of _.filter(), so _.filter() must be used.
* 
* @param: {array} array: The array over which to iterate.
* @param: {function} test: The function to be applied over each element in 
* <array>.
* @return {array}: The array of elements for which calling function returned false.
*/
function reject(array, test){
    var trues = filter(array, test);
    var falses = [];
    for(let i = 0; i < array.length; i++){
        if(!trues.includes(array[i])){
            falses.push(array[i]);
        }
    }
    return falses;
}
module.exports.reject = reject;


/** 
* partition: Designed to return an array that is made up of 2 sub arrays.  An
* array must contain all values for which <function> returned something truthy.
* And the other array must contain all values for which <function> returned 
* something falsey.
* 
* @param: {array} array: The array over which to iterate.
* @param {function} test: The function to be applied over each element in 
* <array>.
* @return {array}: The array that is made up of 2 sub arrays, which 
* contain all truthy elements of function and all falsey elements of function.
*/
function partition(array, test){
    var trues = filter(array, test);
    var falses = reject(array, test);
    var combinedArray = [trues, falses];
    return combinedArray;
}
module.exports.partition = partition;

/** 
* map: Designed to return the new array of the return value of each <function>
* call in a new array.  The <function> must be called for each element in 
* <collection> passing the arguments: if <collection> is an array: the element, 
* it's index, <collection> or if <collection> is an object: the value, it's key,
* <collection>.
* 
* @param {array or object} collection: The array or object over which to iterate.
* @param {function} test: The function to be applied over each element in 
* <collection>.
* @return {newArr}: The new array of the return value of each test call.
*/
function map(collection, test){
    var newArr = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            newArr.push(test(collection[i], i, collection));
        }
    } else{
        Object.entries(collection).forEach(([key, val]) => {
            newArr.push(test(collection[key], key, collection));
        });
    }
    return newArr;
}
module.exports.map = map;

/** 
* pluck: Designed to return an array containing the value of <property> for
* every element in <array>.
* 
* @param {array} arr: The array over which to iterate.
* @param {string} prop: The string used to check key names.
* @return {array}: Array containing the value of propertcy for every element in array.
*/
function pluck(arr, prop){
    return map(arr, function(object, index, array){
        return object[prop];
    });
}
module.exports.pluck = pluck;

/**
* every: Designed to return true if the return value of calling <function> for 
* every element is true.  If even one of them returns false, return false.  If 
* <function> is not provided, return true if every element is truthy, otherwise 
* return false.  The <function> must be called for every element of <collection> 
* with the paramaters: if <collection> is an array: current element, it's index,
* <collection>.  If <collection> is an object: current value, current key, 
* <collection>.
* 
* @param {array or object} collection: The array or object over which to iterate.
* @param {function} test: The function to be applied over each element in 
* <collection>.
* @return {boolean}: Return true if return value of calling function for every 
* element is true. Else, even if one of the element is false, return false.
*/
function every(collection, test){
 var truthy = true;
    if(!test){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(!collection[i] === true){
                truthy = false;
                }
            }
        } else {
            for(var key in collection){
                if(!collection[i] === true){
                truthy = false;
                }
            }
        }
    } else{
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(!test(collection[i], i, collection)){
                truthy = false;
                }
            }
        } else {
            for(var key in collection){
                if(test(collection[i], i, collection)){
                truthy = false;
                }
            }
        }
    }
    return truthy;
}
module.exports.every = every;

/**
* some: Designed to return false if the return value of calling <function> for 
* every element is false.  If even one of them returns true, return true.  If 
* <function> is not provided, return false if every element is falsey, otherwise 
* return true.  The <function> must be called for every element of <collection> 
* with the paramaters: if <collection> is an array: current element, it's index,
* <collection>.  If <collection> is an object: current value, current key, 
* <collection>.
* 
* @param {array or object} collection: The array or object over which to iterate.
* @param {function} test: The function to be applied over each element in 
* <collection>.
* @return {boolean}: Return false if return value of calling function for every 
* element is false. Else, even if one of the element is true, return true.
*/
function some(collection, test){
 var truthy = false;
    if(!test){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(collection[i] === true){
                truthy = true;
                }
            }
        } else {
            for(var key in collection){
                if(collection[i] === true){
                truthy = true;
                }
            }
        }
    } else{
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(test(collection[i], i, collection)){
                truthy = true;
                }
            }
        } else {
            for(var key in collection){
                if(!test(collection[i], i, collection)){
                truthy = true;
                }
            }
        }
    }
    return truthy;
}
module.exports.some = some;

/** 
* reduce: Designed to return the value of the final <function> call after the
* last iteration.  Call <function> for every element in <collection> passing 
* the arguments: previous result, element, index.  Use the return value of 
* <function> as the "previous result" for the next iteration.  On the very 
* first iteration, use <seed> as the "previous result".  If no <seed> was given,
* use the first element/value of <collection> as <seed> and continue to the next
* element.
* 
* @param {array} array: The array over which to iterate.
* @param {function} test: The function to be applied over each element in 
* <array>.
* @param {value} seed: Value used in the first iteration.
* @return {value}: The value of the final function call after the last iteration.
* This value can be anything(string, number, array, object, etc etc).
*/
function reduce(array, test, seed){
    if(seed === undefined){
        for(var i = 0;i <= array.length - 1; i++){
            if(i === 0){
                seed = array[0];
            } else{
                seed = test(seed,array[i],i);
            }
        }
    } else{
        for(var i = 0; i < array.length; i++){
            seed = test(seed,array[i],i);
        }
    }
    return seed;
}
module.exports.reduce = reduce;

/** 
* extend: Designed to copy properties from <object 2> to <object 1> and return
* <object 1>.  If more objects are passed in, copy their properties to 
* <object 1> as well, in the order they are passed in.
* 
* @param {object} object: The object(s) used to copy over eachother.
* @return {object}: The final object that will contain all properties from the
* objects that were passed in.  
*/
function extend(object){
    object = object || {}; 
    for(let i = 0; i < arguments.length; i++){ 
        if(!arguments[i]) 
        continue;
        for(var key in arguments[i]){ 
            if(arguments[i].hasOwnProperty(key)){ 
                object[key] = arguments[i][key];
            }
        }
    }
    return object;
}
module.exports.extend = extend;