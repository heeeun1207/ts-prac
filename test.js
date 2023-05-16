"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_dj_1 = require("./module-dj");
var module_file_1 = require("./module-file");
var module_heen_1 = require("./module-heen");
console.log(module_file_1.data);
console.log(module_dj_1.data2);
console.log(module_heen_1.heen);
var a = 1;
var b = 2;
function moreFunction() {
    console.log("hi");
}
//void : 회피하다 -> 리턴이 없는 함수이다 알 수 있음 
function c(a, b) {
    //불안정한 코드라고 알려주는것 : a 가 any 타입인지 확인해볼래? 라고 물어보는것이다. 
    return a + b;
}
console.log(c(a, b));
