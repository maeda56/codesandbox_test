/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "編集した";
// console.log(val1);

// var val1 = 4;
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let書き換え";
// console.log(val2);

// let val2 = 4;
// console.log(val2);

// const val3 = "cnst";
// console.log(val3);

// val3 = "const_hensyu";
// console.log(val3);
//constのプロパティの変更は可能

// const val4 = {
//   name: "jyake",
//   age: 28
// };
// val4.name = "syake";
// val4.address = "kure";
// console.log(val4);
// //constのプロパティの変更は可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";

// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "jyake";
// const age = 28;

// const message1 = "私の名前は" + name + "で，年齢は" + age + "です";
// console.log(message1);

// const message2 = `私の名前は${name}で，年齢は${age}です．`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str + "...";
// }
// const func2 = function (str) {
//   return str + ",.,";
// };
// console.log(func1("tehe"));
// console.log(func2("tehe"));

// //アロー関数
// const func3 = (str) => {
//   return str + "aro";
// };

// const func4 = (str) => str + "smart";

// console.log(func3("tehe_"));
// console.log(func4("tehe?"));

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };

// const sub = (num1, num2) => num1 - num2;

// console.log(sub(1, 5));

//

/**
 * 分割代入
 */

// const myProfile = {
//   name: "jyake",
//   age: 28
// };

// // const message1 = `名前は${myProfile.name}で，年齢は${myProfile.age}です`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}で，年齢は${age}です`;
// console.log(message2);

// const myProfile = ["jake", 28];
// const [name, age] = myProfile;
// console.log(name + age);

// const name_out = (name = "namihei") => {
//   console.log(`私の名前は${name}です`);
// };
// name_out("warota");
// name_out();

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);

// //sumfunc(arr1[0], arr1[1]);
// sumfunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

//配列のコピー，結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

const nameArr = ["tanaka", "yamada", "matsu"];
// for (let index=0; index<nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name + "_map";
// });

// console.log(nameArr2);

// nameArr.map((name, index) => {
//   console.log(name + "_" + index);
// });

// const numArr = [1, 2, 5, 4, 5];
// const numArr2 = numArr.filter((num) => {
//   return num == 5;
// });
// console.log(numArr2);

/**
 * 三項演算子
 */

//  const val1 = 1>0 ? 'Trueです' : 'Falseです';
//  console.log(val1);

// const num = "1300";
// const format_num =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してや";
// console.log(format_num);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100koeteru" : "ok";
// };

// console.log(checkSum(50, 5));
// ||は←側がfalseなら右側を返す．左側がTrueなら左側を返す．
//

//&&は左側がTrueなら右側を返し，左側がFalseなら左側を返す．
const num = null;
const fee = num || "金額未設定";
console.log(fee);
