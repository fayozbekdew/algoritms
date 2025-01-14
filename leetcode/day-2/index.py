# Question number: 2657  ===  Topic:Array,HashTable,Bit manupilation  ===  Level:Medium
# Masala sharti => 0 indexli qaytarilmas(permuation) A,B ta array berilsa ulardagi A[i] va B[i] gacha
#umumiy raqamlar sonini qayaring yani A = [1,3,2,4], B = [3,1,2,4]  berilsa A[i] = 1 va B[i] = 3 ga teng
#bular da bir xil son yoq shuning uchun 0 keyingi ish A[i] = [3] = [1,3] va B[i] = 1 = [3,1] bularda
#ikki arrayda ham bor raqamlar 1 va 3 va 2 ni qo'shamiz natijaga.Shu tarzda davom etim oxirgi natija [0,2,3,4] qaytarsin.
class Solution:
    def findThePrefixCommonArray(self, A, B):
        seen = set()
        n = len(A)
        ans = []
        for i in range(n):
            seen.add(A[i])
            count = 0
            for j in range(i + 1):
                if B[j] in seen:
                    count += 1
            ans.append(count)
        return ans        
# Question number: 20 ===  Topic:String,stack  ===  Level:easy
# Masala sharti => qavslar to'gri yopilganini tekshirish '()' => true  '(){' => false
class Solution(object):
    def isValid(self, s):
        stack = [] 
        for c in s: 
            if c in '([{': 
                stack.append(c) 
            else:
                if not stack or \
                    (c == ')' and stack[-1] != '(') or \
                    (c == '}' and stack[-1] != '{') or \
                    (c == ']' and stack[-1] != '['):
                    return False
                stack.pop() 
        return not stack 