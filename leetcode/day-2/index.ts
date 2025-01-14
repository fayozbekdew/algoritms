//! Question number: 20 ===  Topic:String,stack  ===  Level:easy
// Masala sharti => qavslar to'gri yopilganini tekshirish '()' => true  '(){' => false
function isValid(s: string): boolean {
    const hash = { ")": "(", "}": "{", "]": "[" };
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] && stack[stack.length - 1] == hash[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
};
