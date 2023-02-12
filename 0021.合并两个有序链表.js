
//注意  if , else if, else  与 多个if 的区别 ！！！！！！

var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();    //新建一个dummy节点
  let dummy = curr;

  while (l1 !== null && l2 !== null) {   //当都不为空时
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 !== null) {     //当l1为空
    curr.next = l1;
  }

  if (l2 !== null) {      //当l2为空
    curr.next = l2;
  }

  return dummy.next;
};

// 递归
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

/*  else总是和就近的if语句匹配。
1. if型
结构是:

if(某个条件)
  语句;

使用场景:
当满足这个条件时,执行某个操作,而不满足该条件时,什么都不做.在这种情况下就可以使用这种结构

2. if else型
if(某个条件)
  语句1;
else
  语句2;

使用场景:
当满足这个条件时,执行某个操作,当不满足这个条件时,
执行另一个操作(和if型区别是如果不满足条件一个是执行另一个操作,而一个是什么都不做)

3. if else if else型
if(条件1)
  语句1;
else if(条件2)
  语句2;
else if(条件3)
  语句3;
  .
  .
  .
else
  语句4;

 使用场景:
这种形式的if语句,最终只有一个出口.即当满足条件1时,执行语句1.当不满足条件1时,
往下走,判断是否满足条件2,如果还是不满足,则继续往下走,一直走到else语句,说明之前的条件都不满足,最终执行语句4;
这个和之前两个的区别是:它存在了多种情况的分析,而之前两个仅仅只有一种情况的分析.


二、 if , else if, else 与if 嵌套的区别:
if套if,是当外面条件不满足时,里面的if不会执行
而if , else if, else 是当第一个条件不满足时,判断第二个条件

最后我们来看看多个if的类型
if(条件1)
  语句1;
if(条件2)
  语句2;
if(条件3)
  语句3;

解释一下:有没有发现特别像if , else if, else 型,但是二者是有区别的.
分析一下多个if:当满足条件1时,执行语句1.当不满足条件1时,往下走,判断条件2,
如果还是不满足,再判断条件3.这么看好像和if , else if, else 型没什么区别.
我们看个例子就明白了

多个if型:

int a=0;
if(a==0){
  a++;
  printf("aaa");
}      
if(a==1)
  printf("bbb");
if(a==2)
  printf("ccc");   

最终输出:aaabbb,在多个if语句中,所有的if都会进行判断,无论是否满足情况.
所以在满足a==0时,执行了a++,a就变成了1,当进行a==1判断时,也符合,故也执行了printf("bbb")
-------------------------------------------------
if , else if, else 型:

int a=0;
if(a==0){
  a++;
  printf("aaa");
}      
else if(a==1)
  printf("bbb");
else
  printf("ccc");   

最终只输出了aaa.在if ,else if ,else中,
只要有一个条件满足,则其余条件不用判断,直接跳过即可,所以a++,a=1之后不会去判断else if中的

 */
