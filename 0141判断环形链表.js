
//快慢双指针
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//使用set查重
var hasCycle = function (head) {
  let arrow = head
  let set = new Set()
  while (arrow) {
    if (!set.has(arrow)) {
      set.add(arrow)
      arrow = arrow.next
    }
    else
      return true
  }
  return false
};