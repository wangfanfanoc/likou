/*
递归
maxDepth在每一次递归的过程中被更改过了
*/
var maxDepth = function (root) {
    let maxDepth = 0
    const dfs = (root, deep) => {
        if (!root) {
            maxDepth = deep - 1 > maxDepth ? deep - 1 : maxDepth
            return maxDepth
        }
        dfs(root.left, deep + 1)
        dfs(root.right, deep + 1)
    }
    dfs(root, 1)
    return maxDepth
};