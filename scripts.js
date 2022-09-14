// 1. для отправленной в функцию строки найти каким по счету является первое вхождение  слова "lorem", регистр не важен
let text = "lorom lerem lorem";
function find(text, separator) {
    let arr = text.split(" ");
    let result = arr.indexOf("lorem");
    console.log(result);
}
find(text);
arr.indexOf("lorem");

// 2. создать массив из исходного, в котором четные элементы(не индексы) увеличены вдвое, а нечетные уменьшены вдвое, при этом если число делится на 13 без остатка, то сначала нужно отнять от него 5
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let result3 = arr3.map(function(item) {
    if (item % 13 === 0 && item % 2 === 1) {
        return ((item-5) / 2);
    } else if (item % 2 === 0) {
        return item * 2;
    } else {
        return item / 2;
    }
})
console.log(result3);

//3. для отправленной в функцию строки найти каким по счету является последнее вхождение  слова "lorem ipsum", регистр не важен
function loremLast() {
    console.log(string.toLowerCase().lastIndexOf('lorem ipsum'));
  }
  
  loremLast();