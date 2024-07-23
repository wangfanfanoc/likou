function create2DArray(m, n) {
  //m行 n列
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0; // 或其他初始值
    }
  }
  return arr;
}
