

/*  双指针
由于我们需要找到倒数第 n 个节点，因此我们可以使用两个指针 first 和 second 同时对链表进行遍历，
并且 first 比 second 超前 n 个节点。当 first 遍历到链表的末尾时，second 就恰好处于倒数第 n+1个节点。

*/


var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode()
  dummy.next = head
  let p, pre
  p = dummy, pre = dummy
  for (let i = 0; i <= n; i++)  //先让pre前进n+1步（看while里的条件  判断pre的时候前进n+1步，判断的是pre.next的时候前进n步）
  {
    pre = pre.next
  }
  while (pre) {
    pre = pre.next
    p = p.next

  }
  p.next = p.next.next     // 只要没有指针指向那个节点，它就被回收了
  return dummy.next

};



var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;
  for (let i = 0; i < n; i++) {
    n2 = n2.next;
  }
  while (n2.next != null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};


/* 
栈
与下方的数组法第二种相似，
将链表节点依次存入数组stack栈，
再将栈的后n个元素弹出，
暴露出链表倒数第n个数的前一个节点
将其与倒数第n个数的后一个节点相连*/


var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head)
  const stack = new Array()
  let pushList = dummy
  while (pushList != null) {
    stack.push(pushList)
    pushList = pushList.next
  }
  for (let i = 0; i < n; i++) {
    stack.pop()                          // 将栈的后n个元素弹出，
  }
  let peek = stack[stack.length - 1]  //暴露出链表倒数第n个数的前一个节点
  peek.next = peek.next.next          // 将其与倒数第n个数的后一个节点相连
  return dummy.next
};


