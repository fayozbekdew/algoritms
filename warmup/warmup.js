//!   Issues from coding.js

//? =========================== 1 ===============================
// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
//* Examples
// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true
//! Answer
function sleepIn(weekday, vacation) {
  if (weekday == false && vacation == true) {
    return true;
  } else if (
    (weekday === true && vacation === true) ||
    (weekday === false && vacation === false)
  ) {
    return true;
  }
  return false;
}
// sleepIn(true, true) → true
//? =========================== 2 ===============================
//We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
//* Examples
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
//! Answer
function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile) ? true : false;
}
// monkeyTrouble(true, false) → false
//? =========================== 3 ===============================
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
//* Examples
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8
//! Answer
function sumDouble(a, b) {
  return a == b ? (a + b) * 2 : a + b;
}
// sumDouble(2, 2) → 8
//? =========================== 4 ===============================
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
//* Examples
// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0
//! Answer
function diff21(n) {
  return n > 21 ? Math.abs((21 - n) * 2) : Math.abs(21 - n);
}
// diff21(23) → 4
//? =========================== 5 ===============================
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
//* Examples
// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false
//! Answer
function parrotTrouble(talking, hour) {
  return talking && (hour < 7 || hour > 20) ? true : false;
}
//parrotTrouble(false, 6) → false
//? =========================== 6 ===============================
// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10
//* Examples
// makes10(9, 10) → true
// makes10(9, 9) → false
// makes10(1, 9) → true
//! Answer
function makes10(a, b) {
  return a == 10 || b == 10 || a + b == 10 ? true : false;
}
//makes10(1, 9) → true
//? =========================== 6 ===============================
// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10
//* Examples
// makes10(9, 10) → true
// makes10(9, 9) → false
// makes10(1, 9) → true
//! Answer
function makes10(a, b) {
  return a == 10 || b == 10 || a + b == 10 ? true : false;
}
//makes10(1, 9) → true
//? =========================== 7 ===============================
// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.
//* Examples
// notString('candy') → not candy
// notString('x') → not x/.
// notString('not bad') → not bad
//! Answer
function notString(str){
  return (str.startsWith('not')) ? str : `not ${str}`
}
// notString('not bad') → not bad
//? =========================== 8 ===============================
// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
//* Examples
// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn
//! Answer
function missingChar(str, n){
  return str.slice(0,n) + str.slice(n+1)
}
// missingChar('kitten', 4) → kittn
//? =========================== 9 ===============================
// Given a string, return a new string where the first and last chars have been exchanged.
//* Examples
// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba
//! Answer
function frontBack(str){
  return (str.length >1) ? str.at(-1) + str.slice(1,-1) + str.substr(0,1) : str
}
// frontBack('ab') → ba
//? =========================== 10 ===============================
// Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
//* Examples
// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc
//! Answer
function front3(str){
  return str.substr(0,3).repeat(3)
}
// front3('abc') → abcabcabc
//? =========================== 11 ===============================
// Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.
//* Examples
// backAround('cat') → tcatt
// backAround('Hello') → oHelloo
// backAround('a') → aaa
//! Answer
function backAround(str){
  return str.at(-1) + str + str.at(-1)
}
// backAround('Hello') → oHelloo
//? =========================== 12 ===============================
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
//* Examples
// or35(3) → true
// or35(10) → true
// or35(8) → false
//! Answer
function or35(n){
  if(n % 3 == 0 || n % 5 == 0){
return true
}
  return false
}
// or35(8) → false
//? =========================== 13 ===============================
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.
//* Examples
// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab
//! Answer
function front22(str){
  return str.substr(0,2) + str + str.substr(0,2)
}
// front22('Ha') → HaHaHa
//? =========================== 14 ===============================
// Given a string, return true if the string starts with 'hi'and false otherwise
//* Examples
// startHi('hi there') → true
// startHi('hi') → true
// startHi('hello hi') → false
//! Answer
function startHi(str){
  return str.startsWith('hi') ? true : false
}
// startHi('hello hi') → false
//? =========================== 15 ===============================
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
//* Examples
// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false
//! Answer
function icyHot(temp1, temp2){
  if((temp1 > 100 && temp2 < 0) || (temp2 > 100 && temp1 < 0)){
  return true
  }
  return false
}
// icyHot(2, 120) → false
//? =========================== 16 ===============================
// Given 2 int values, return true if either of them is in the range 10..20 inclusive.
//* Examples
// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false
//! Answer
function icyHot(temp1, temp2){
  if((temp1 > 100 && temp2 < 0) || (temp2 > 100 && temp1 < 0)){
  return true
  }
  return false
}
// icyHot(2, 120) → false

