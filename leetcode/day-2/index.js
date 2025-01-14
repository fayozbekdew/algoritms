//! Question number: 2657  ===  Topic:Array,HashTable,Bit manupilation  ===  Level:Medium
/* Masala sharti => 0 indexli qaytarilmas(permuation) A,B ta array berilsa ulardagi A[i] va B[i] gacha
umumiy raqamlar sonini qayaring yani A = [1,3,2,4], B = [3,1,2,4]  berilsa A[i] = 1 va B[i] = 3 ga teng
bular da bir xil son yoq shuning uchun 0 keyingi ish A[i] = [3] = [1,3] va B[i] = 1 = [3,1] bularda
ikki arrayda ham bor raqamlar 1 va 3 va 2 ni qo'shamiz natijaga.Shu tarzda davom etim oxirgi natija [0,2,3,4] qaytarsin.*/
var findThePrefixCommonArray = function (A, B) {
  const set = new Set(); // uniq value yaratadi
  const n = A.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    set.add(A[i]); // har loop da A[i] dagini uniq arrayga qo'shamiz
    let c = 0;
    for (let j = 0; j <= i; j++) {
      if (set.has(B[j])) {
        // agar set da bolsa demak u umumiy son hisoblanadi va umumiylar
        // sonini c ga yigamiz va B array bo'yicha aylanib bolgandan keyin ans ga qo'shamiz.
        c++;
      }
    }
    ans.push(c);
  }
  return ans;
};

//! Question number: 20 ===  Topic:String,stack  ===  Level:easy
// Masala sharti => qavslar to'gri yopilganini tekshirish '()' => true  '(){' => false
// JS
var isValid = function (s) {
  const hash = { ")": "(", "}": "{", "]": "[" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] && stack[stack.length - 1] == hash[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
};
