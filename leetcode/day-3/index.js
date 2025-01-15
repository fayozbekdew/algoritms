//! Question:61  == Topic:linked list  == Level:medium
// Masala sharti => lnked list beriladi va k beriladi linked list tail elementini
// k marta head ga aylantirishimiz kerak yani linked list [1,2,3,4,5] k = 2
// bolsa [4,5,1,2,3] qaytarsin.
var rotateRight = function (head, k) {
  if (!head || k === 0 || k === 1) return head;
  let step = k;
  while (step != 0) {
    let curr = head; // 1,2,3,4,5
    while (curr) {
      if (curr.next && curr.next.next) {
        curr = curr.next;
      } else if (curr.next) {
        let newNode = new ListNode(curr.next.val);
        newNode.next = head;
        head = newNode;
        curr.next = null;
        break;
      }
    }
    step = step - 1;
  }
  return head;
};
// Yuqoridagi kod g'oyasi to'gri lekin time lime qaytarishi mumkun bu esa to'gri javob qaytaradi
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  // 1. Ro'yxat uzunligini topamiz
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // 2. `k`ni optimallashtiramiz
  k = k % length;
  if (k === 0) return head; // Aylantirish shart emas

  // 3. Ro'yxatni halqa shakliga keltiramiz
  tail.next = head;

  // 4. Yangi bosh tugunni topamiz
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;

  // 5. Halqani yechamiz
  newTail.next = null;

  return newHead;
};
