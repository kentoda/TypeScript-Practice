"use strict";
// 関数定義
// function addTax(price: number) {
// 10%の税込み
// return price = price * (1 + tax / 100);
// }
// アロー関数
var addTax = function (price, tax) {
    return (price = price * (1 + tax / 100));
};
console.log(addTax(520, 212121));
console.log(addTax(1844, 44444));
