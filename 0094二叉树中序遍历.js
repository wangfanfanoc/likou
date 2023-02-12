
//1、递归

var inorderTraversal = function (root) {
    const res = [];
    function inorder(root) {
        if (!root) {
            return;
        }
        inorder(root.left);              //只需交换三者的位置 便可以完成先序 后续  中序 遍历
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
//时间复杂度：O(n)O(n)，其中 nn 为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。

//空间复杂度：O(n)O(n)。空间复杂度取决于递归的栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n)O(n) 的级别。


//2、迭代
// 显式地将这个栈模拟出来

var inorderTraversal = function (root) {
    const res = [];  //结果数组
    const stk = [];  //栈
    while (root || stk.length) {
        while (root) {                //最左边的节点
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

