/*console.log('Hello World from Js');
// Data Types
var myName = "Rashmi";
// let only in that particular scope
let our = 8;
// const never changes
const pi = 3.14;
var a = 5;
var b = 3;
var c= "Hello"
b=a;
console.log(c + "World")
var r = "A double stiring \"Hello world include \""
console.log(r)

\'single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form fee


var str= "This is one" + "This is second"
var ss= "jkdajfjg"
console.log(str+ss)


function wordBlanks(noun, adjective, verb, adver)
{
    var result = "";
    result += "The " + adjective + noun + verb + " to the store "+ adver
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"))

var array = ["Stimp", " j", ["cat"]]
var a= array.shift()
console.log(a)
console.log(array)

var array = ["Stimp", " j", ["cat"]]
var a= array.shift()
array.unshift("hhhhihh")
console.log(a)
console.log(array)
//console.log(b)
*/

function nextnum(arr,item)
{
    arr.push(item);
    return arr.shift();
}
var tar = [1,2,3,4,5];
console.log("Before: "+JSON.stringify(tar));
console.log(nextnum(tar,6));
console.log("After: "+JSON.stringify(tar));