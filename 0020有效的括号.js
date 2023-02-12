/* 
当开始接触题目时，我们会不禁想到如果计算出左括号的数量，和右括号的数量，如果每种括号左右数量相同，会不会就是有效的括号了呢？
事实上不是的，假如输入是 [{]}，每种括号的左右数量分别相等，但不是有效的括号。这是因为结果还与括号的位置有关。
  
*/
// 栈+字典（基于哈希表实现的） 
// 遍历串 遇到左括号（串中） 将对应的右括号（字典里存的）放入栈中，遇到右括号（串中的），出栈一个元素（字典里的）与这个右括号（串中的）比较
var isValid = function (s) {
  const mappings = new Map();    //放入字典中  左括号为key 右括号为value
  mappings.set("(", ")");
  mappings.set("[", "]");
  mappings.set("{", "}");

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (mappings.has(s[i])) {                // 字典中如果有这个key 说明这个字符是左括号
      stack.push(mappings.get(s[i]));       //   将这个key对应的value也就是右括号放入栈中
    } else {
      if (stack.pop() !== s[i]) {           //  字典中没有这个key 说明这个字符是个右括号， 出栈一个右括号与字典里的value相比较
        return false;                       // 若不相等  说明括号的匹配不正确
      }
    }
  }

  if (stack.length !== 0) {              //  栈中还有元素，说明左右括号不配对
    return false;
  }

  return true;
};



//  更容易理解
var isValid = function (s) {
  let stack = new Array()
  let string
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{')
      stack.push(s[i])
    if (s[i] == ')') {
      string = stack.pop()
      if (string != '(')
        return false
    }
    if (s[i] == ']') {
      string = stack.pop()
      if (string != '[')
        return false
    }
    if (s[i] == '}') {
      string = stack.pop()
      if (string != '{')
        return false
    }

  }
  if (stack.length == 0)
    return true
  else return false
};
