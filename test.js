// const obj = {};
// // const obj可以添加属性
// obj.name = "zhangsan";
// obj.address = {city: "guangzhou"};
// console.log(obj); //{ name: 'zhangsan', address: { city: 'guangzhou' } }
// // 也可以改变属性值
// obj.name = "zhangsi";
// console.log(obj); //{ name: 'zhangsi', address: { city: 'guangzhou' } }

// Object.freeze(obj);
// // freeze obj之后不能改变值属性
// obj.name = "lisi";
// // 但是能改变对象属性，同时也可以给类型为对象的属性添加新属性
// obj.address.city = "shanghai";
// obj.address.street = "nanjing east road";
// console.log(obj);
// /*{
//   name: 'zhangsi',
//   address: { city: 'shanghai', street: 'nanjing east road' }
// }*/

// // freeze obj之后不能添加属性
// obj.age = "18";
// console.log(obj);
// // {
// //     name: 'zhangsi',
// //     address: { city: 'shanghai', street: 'nanjing east road' }
// //   }

// // 如果要将对象中的所有属性也冻结：
// function freezeAll(obj){
//     Object.freeze(obj);
//     Object.keys(obj).forEach(key => {
//         if (typeof obj[key] === "object"){
//             freezeAll(obj[key]);
//         }
//     })
// }

// freezeAll(obj);
// obj.address.city = "beijing";
// console.log(obj);
// // {
// //     name: 'zhangsi',
// //     address: { city: 'shanghai', street: 'nanjing east road' }
// // }

// bar();
// var bar = function(){
//     console.log(2);
// }

// console.log(a); //ReferenceError: Cannot access 'a' before initialization
let a = 1;
var a = 2;
console.log(a);