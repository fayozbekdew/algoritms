//! question:290 == topic:hash table,string == level:easy
// Masala sharti => ikki string beriladi ular ichida harflar ketma ketligi va bir xil bo'lsa true qaytarsn
// masalan a =['abba'] va b =['dog cat cat dog'] bolsa true qaytarsin
// masalan a =['abba'] va b =['dog cat cat fish'] bolsa false qaytarsin
//bu yechimni topgunca 2-3 ta yechim qildim 1-2  testdan o'tmadi
var wordPattern = function (pattern, s) {
  const aa = idxFun(pattern);
  const bb = idxFun(s.split(" "));
  console.log(JSON.stringify(aa) == JSON.stringify(bb));
};
function idxFun(pattern) {
  let idx = 0;
  let p = [];
  const hash = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!hash.has(pattern[i])) {
      hash.set(pattern[i], idx);
      idx++;
    }
  }
  for (let s of pattern) {
    if (hash.has(s)) {
      p.push(hash.get(s));
    }
  }
  return p;
}
console.log(wordPattern("abba", "dog cat cat fish"));

//! question:318 == topic:array,string,bit manupilation == level:medium
// Masala sharti => array ichida stringlar ro'yhati berilgan bo'lsa undagi bir birida takrorlanmagan
//harflar bor ikki eng uzun string ko'paytmasini qaytarsin
var maxProduct = function (words) {
  if (words.length <= 1) return 0;
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (inc(words[i], words[j])) {
        let n = words[i].length * words[j].length;
        if (n >= max) {
          max = n;
        }
      }
    }
  }
  return max;
};
function inc(word1, word2) {
  for (let i = 0; i < word1.length; i++) {
    if (word2.includes(word1[i])) {
      return false;
    }
  }
  return true;
}
