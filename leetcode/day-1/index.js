// MY Solution
//! Question number: 3223  ===  Topic:String,HashTable,Calculation  ===  Level:Medium
/* Masala sharti => string berilsa istalgan bitta elementni tanglash va undan oldingi va keyingi shunga 
 o'xshash elementni o'chiring yani 'abaca' bolsa 2 indexdagi a ni tanlab 0 indexdagi va 4 indexdagi a ni ochirishimiz kerak
 bu shart istalganca bajarilishi mumkun.*/
var minimumLength = function (s) {
  // agar string uzunligi 3 dan kam  bolsa masala shartini bajara olmaydi shuning ucun lengthni qaytarsin
  if (s.length < 3) {
    return s.length;
  }
  // bu qismda hash table yaratamiz masalan "abaacbcbb" berilgan bolsa hash table = {"a":3,"b":3,"c":1}
  let hash = new Map();
  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }
  // bu qismda agar hash table ichida bir elementi qiymati 2 dan katta bolsa demak unda shart bajariladi
  // shuning uchun shartni bajarib boshi va oxiridagi elementlarni ochiramiz shuning uchun 2 ni ayiramiz
  // va bu shartni qanoatlantirme qolguncha loop da takrorlaymiz chunki masala shartini istalganca tekshirilsin degan.
  for (let [key, value] of hash) {
    let val = value;
    while (val > 2) {
      hash.set(key, hash.get(key) - 2);
      val = val - 2;
    }
  }
  // bu qismda value larni bir o'zgaruvchiga yigib olamiz
  let result = 0;
  for (let [key, value] of hash) {
    result += value;
  }
  return result;
};
