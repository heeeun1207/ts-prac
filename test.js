var a = 1;
var b = 2;
function c(a, b) {
    //불안정한 코드라고 알려주는것 : a 가 any 타입인지 확인해볼래? 라고 물어보는것이다. 
    return a + b;
}
console.log(c(a, b));
