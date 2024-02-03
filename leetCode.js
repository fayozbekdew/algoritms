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

//GEENARATOR function
var fibGenerator = function*() {
    let current = 0;
    let nextVal = 1;
    while (true){
        yield current; // 0, 1, 
        [current,nextVal] = [nextVal,current+nextVal];
        // [ c0 , n1]
        // [ c1 , n1]
        // [c1 , n2]
        // [c2 , n3]
        // [c3 , n4]
        // [c4 , n5]
    }
  };
  let aa = fibGenerator(5);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
//   console.log(aa.next().value);
  

// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.
var chunk = function(arr, size) {
    var arrCh = [];
    var index = 0;
    while (index < arr.length) {
      arrCh.push(arr.slice(index, index + size));
      index += size;
      // 0 + 3  index = 3
      // 3 + 3  index = 6
      // condition failed while does not work  
    }
    return arrCh;
}