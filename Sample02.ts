// 関数定義
// function addTax(price: number) {
// 10%の税込み
// return price = price * (1 + tax / 100);
// }

// アロー関数
let addTax = (price: number, tax: number) => {
    return (
      price = price * (1 + tax / 100)
    )
};


console.log(addTax(520, 212121));
console.log(addTax(1844, 44444));