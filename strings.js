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
//? =========================== 21 ===============================
//Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
//* Examples
// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true
//! Answer
function frontAgain(str){
  if(str.substr(0,2) == str.slice(-2) && str.length > 1){
  return true
  }
  return false
}
//? =========================== 22 ===============================
//Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.
//* Examples
// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH
//! Answer
function extraFront(str){
  return str.length > 1 ? str.substr(0,2).repeat(3) : str.repeat(3)
}
//? =========================== 23 ===============================
// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.
//* Examples
// without2('HelloHe') → lloHe
// without2('HelloHi') → HelloHi
// without2('Hi') →
//! Answer
function without2(str){
  if(str.substr(0,2) === str.slice(-2) && str.length > 1){
  return str.slice(2)
  }
  return str
}
//? =========================== 24 ===============================
// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.
//* Examples
// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay
//! Answer
function deFront(str){
  if(str.at(0) == 'a' && str.at(1) == 'b'){return `ab${str.slice(2)}`}
  else if(str.at(0) == 'a'){
  return `a${str.slice(2)}`
  }else if(str.at(1) == 'b'){
  return `b${str.slice(2)}`
  }
  return str.slice(2)
}
//? =========================== 25 ===============================
// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.
//withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi
//! Answer
function withoutX(str){
  if(str.at(0) == 'x' && str.at(-1) == 'x'){
  return str.slice(1,-1)
  }
  else if(str.at(-1) == 'x'){
  return str.slice(0,-1)
  }else if(str.at(0) == 'x'){
  return str.slice(1)
  }
  return str
}
//? =========================== 26 ===============================
// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.
// withoutX2('xHi') → Hi
// withoutX2('Hxi') → Hi
// withoutX2('Hi') → Hi
//! Answer
function withoutX2(str){
  if(str.at(0) == 'x' && str.at(1) == 'x'){
  return str.slice(2)
  }else if(str.at(0) == 'x'){
  return str.slice(1)
  }else if(str.at(1) == 'x'){
  return str.slice(0,1) + str.slice(2)
  }
  return str
}
//? =========================== 27 ===============================
// Given a string, return a string where for every char in the original, there are two chars.
// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree
//! Answer
function doubleChar(str){
  let arr = []
for(let a of str){
 arr.push(a + a)
}
return ( arr.join(''))
}
//? =========================== 28 ===============================
//Return the number of times that the string "hi" appears anywhere in the given string.
// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2
//! Answer
function countHi(str){
  let count = 0 
  for(let a in str){
    if((str.at(a) == 'h') && (str.at(++a) == 'i')){
     count++
      }
  }
return count
}
//? =========================== 28 ===============================
//Return true if the string "cat" and "dog" appear the same number of times in the given string.
//catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true
//! Answer
function catDog(str){
  let catCount = 0
  let dogCount = 0
  for(let a in str){
     if((str.at(a) == 'c') && (str.at(++a) == 'a') && (str.at(a += 1) == 't')){
        catCount++
     }else if((str.at(a) == 'd') && (str.at(++a) == 'o') && (str.at(a += 1) == 'g'))
     { dogCount++ }
  }
  if(dogCount == catCount) {return true}
  return false
}
//? =========================== 29 ===============================
//Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.
// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2
//! Answer
function countCode(str){
  let Count = 0
    for(let a in str){
      if((str.at(a) == 'c') && (str.at(++a) == 'o')  && (str.at(a += 2) == 'e')){
         Count++
      }
   }
   return (Count)
}
//? =========================== 30 ===============================
//Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.
// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true
//! Answer
function xyzThere(str){
  if(!(str.at(-4) == '.') && str.slice(-3) == 'xyz'){
  return true
  }else if(str.substr(0,3) == 'xyz'){ return true}  
    return false
  }
//? =========================== 31 ===============================
//Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.
// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false
//! Answer
function bobThere(str){
  for (let a in str){
  if(str.at(a++) == 'b' && str.at(a += 1) == 'b'){
  return true
  }
  }
  return false
}
//? =========================== 32 ===============================
//We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.
// xyBalance('aaxbby') → true
// xyBalance('aaxbb') → false
// xyBalance('yaaxbb') → false
//! Answer
function xyBalance(str){
  let xIndex = 0
  let yIndex = 0
    for(let a of str){
      if(str.includes('x') && !str.includes('y'))
        {return false}
        else if(a == 'x'){
            xIndex = str.lastIndexOf(a)
        }
        else if(a == 'y'){
            yIndex = str.lastIndexOf(a)
        }
    }
    return (xIndex > yIndex) ? false : true
}
//? =========================== 33 ===============================
//Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.
// repeatEnd('Hello', 3) → llollollo
// repeatEnd('Hello', 2) → lolo
// repeatEnd('Hello', 1) → o
//! Answer
function repeatEnd(str, n){
  return str.slice(-n).repeat(n)
}
//? =========================== 34 ===============================
//Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).
//repeatFront('Chocolate', 4) → ChocChoChC
// repeatFront('Chocolate', 3) → ChoChC
// repeatFront('Ice Cream', 2) → IcI
//! Answer
function repeatFront(str, n){
  let newStr = ''
  for(let i = n; i > 0; i--){
    newStr += str.slice(0,i)
  }
return(newStr)
}
//? =========================== 35 ===============================
//Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string..
// repeatSeparator('Word', 'X', 3) → WordXWordXWord
// repeatSeparator('This', 'And', 2) → ThisAndThis
// repeatSeparator('This', 'And', 1) → This
//! Answer
function repeatSeparator(word, sep, count){
  return (word + sep).repeat(--count)+ word
}
//? =========================== 36 ===============================
//Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.
//repeatSeparator('Word', 'X', 3) → WordXWordXWord
// repeatSeparator('This', 'And', 2) → ThisAndThis
// repeatSeparator('This', 'And', 1) → This
//! Answer
function repeatSeparator(word, sep, count){
  let str = (word + sep).repeat(count)
  if(count == 1){return word}
  return(str.slice(0, -sep.length))
}









