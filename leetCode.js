let  addTwoPromises = async function(promise1, promise2) {
    await Promise.all([promise1, promise2]).then(val => {
        val.reduce((curr, acc) => {
            let va = Number(curr += acc)
            console.log(va);
        }, 0)
    })
   };

   let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
   let promise3 = new Promise(resolve => setTimeout(() => resolve(5), 60))
//    addTwoPromises(promise1, promise3)

let val = 1;
const recursionFn = (n) => {
  if (n === 3) {
    return (val *= n);
  } else {
    val *= n;
    return recursionFn(n + 1);
  }
};
// console.log(recursionFn(1));

var findWordsContaining = function(words, x) {
    let newAr = []
    words.map((word, index, arr) => {
        if(word.includes(x)){
             newAr.push(index)
        }
    })
    console.log(newAr);
};

// findWordsContaining(["abc","bcd","aaaa","cbc"], 'z')

var differenceOfSums = function(n, m) {

    let ans = 0;

    for (let i=1; i<=n; i++) {
        (i%m == 0) ? ans-=i : ans+=i
    }

    return ans;
    
};

// differenceOfSums(10, 3)