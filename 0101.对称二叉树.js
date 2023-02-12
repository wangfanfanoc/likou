/*
递归解法 
*/
var isSymmetric = function (root) {
  const isSame = (left, right) => {
    if (left == null && right == null)
      return true
    if (left == null || right == null)
      return false
    if (left.val != right.val)
      return false
    if (left.val == right.val) {
      return isSame(left.left, right.right) && isSame(left.right, right.left)
      //返回值是布尔类型的递归  一定要确定return!!!
    }
  }
  if (isSame(root, root))
    return true
  return false

};



/*
广度优先遍历
*/

const check = (u, v) => {
  const q = [];
  q.push(u), q.push(v);

  while (q.length) {
    u = q.shift();
    v = q.shift();

    if (!u && !v) continue;
    if ((!u || !v) || (u.val !== v.val)) return false;

    q.push(u.left);
    q.push(v.right);

    q.push(u.right);
    q.push(v.left);
  }
  return true;
}
var isSymmetric = function (root) {
  return check(root, root);
}