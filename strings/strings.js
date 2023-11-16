//? =========================== 1 ===============================
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
//* Examples
// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!
//! Answer
function helloName(name){
    return `Hello ${name}!`
  }
//? =========================== 2 ===============================
// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//* Examples
// makeAbba('Hi', 'Bye') → HiByeByeHi
// makeAbba('Yo', 'Alice') → YoAliceAliceYo
// makeAbba('What', 'Up') → WhatUpUpWhat
//! Answer
function makeAbba(a, b){
    let arr = [a, b]
    return arr.join("") + arr.reverse().join("")
  }
//? =========================== 3 ===============================
// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
//* Examples
// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab
// extraEnd('Hi') → HiHiHi
//! Answer
function extraEnd(str){
    return str.slice(-2).repeat(3)
  }
//? =========================== 4 ===============================
// Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
//* Examples
// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab
//! Answer
function firstTwo(str){
    return (str.length < 2) ? str :str.substr(0,2)  
  }
//? =========================== 5 ===============================
//Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
//* Examples
// withoutEnd('java') → av
// withoutEnd('coding') → odin
//! Answer
function withoutEnd(str){
    return str.slice(1,-1) 
   }
//? =========================== 6 ===============================
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
//* Examples
// comboString('Hello', 'hi') → hiHellohi
// comboString('Hi', 'Hello') → HiHelloHi
// comboString('aaa', 'b') → baaab
//! Answer
function comboString(a, b){
    return a.length > b.length ? b + a + b : a + b + a
  }
//? =========================== 7 ===============================
// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
//* Examples
// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava
//! Answer
function nonStart(a, b){
    return a.slice(1) + b.slice(1)
  }
//? =========================== 8 ===============================
// Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.
//* Examples
// left2('Hello') → lloHe
// left2('java') → vaja
// left2('Hi') → Hi
//! Answer
function left2(str){
    return str.slice(2)+str.slice(0,2)
  }
//? =========================== 9 ===============================
//Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.
//* Examples
// theEnd('Hello', true) → H
// theEnd('Hello', false) → o
// theEnd('oh', true) → o
//! Answer
function theEnd(str, front){
    if(front){
    return str.at(0)
    }
    return str.at(-1)
  }
//? =========================== 10 ===============================
//Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.
//* Examples
// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →
//! Answer
function withoutEnd2(str){
    return str.slice(1, -1)
  }
//? =========================== 11 ===============================
//Given a string, return true if it ends in "ly".
//* Examples
// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false
//! Answer
function endsLy(str){
    return (str.endsWith('ly')) ? true : false
  }
//? =========================== 12 ===============================
// Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.
//* Examples
// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce
//! Answer
function nTwice(str, n){
    return n == 0 ? '' : str.substr(0,n) + str.substr(-n)
  }
//? =========================== 13 ===============================
// Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.
//* Examples
// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce
//! Answer
function nTwice(str, n){
    return n == 0 ? '' : str.substr(0,n) + str.substr(-n)
  }
//? =========================== 14 ===============================
// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
//* Examples
// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false
//! Answer
function hasBad(str){
  if(str.substr(0, 3) == 'bad' || str.substr(1,3) == 'bad'){
  return true
  }
  return false
}
//? =========================== 15 ===============================
// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.
//* Examples
// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@
//! Answer
function atFirst(str){
  if(str.length == 0){
  return '@@'
  }else if(str.length < 2 ){
  return str + '@'
  }
  return str.slice(0,2)
}
//? =========================== 16 ===============================
// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
//* Examples
// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@
//! Answer
function lastChars(a, b){
  const arr = []
  if(a.length >= 1){
  arr.push(a)
  }
  if(b.length >= 1){
  arr.push(b)
  }
  let newstr = arr.join('')
  let newArr = newstr.split('')
  if(a.length == 0 && b.length == 0){
  return '@@'
  }else if(a.length == 0 && b.length > 0){
  return '@' + newArr.at(-1) 
  }
  else if(arr.length < 2){
      return(newArr.at(0) + '@')
  }
  return newArr.at(0) + newArr.at(-1)
}
//? =========================== 17 ===============================
//Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
//* Examples
// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc
//! Answer
function conCat(a, b){
  if(a.at(-1) == b.at(0)){
  return a + b.slice(1)
  }
  return a + b
}
//? =========================== 18 ===============================
// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".
//* Examples
// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba
//! Answer
function lastTwo(str){
  return str.length > 1 ? str.slice(0,-2) + str.at(-1) + str.at(-2) : str 
}
//? =========================== 19 ===============================
// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
//* Examples
// seeColor('redxx') → red
// seeColor('xxred') → ''
// seeColor('blueTimes') → blue
//! Answer
function seeColor(str){
  if(str.startsWith('red') ){
  return 'red'
  }else if(str.startsWith('blue')){
  return 'blue'
  }
  return ''
}

