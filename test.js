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

var solution1 = function (beginWord, endWord, wordList){
    let wordSet = new Set(wordList);
    // 如果字典为空或 endWord不在字典里，直接返回
    if (wordSet.size === 0 || !wordSet.has(endWord)){
        return 0;
    }

    const queue = [];
    queue.push(beginWord);
    let visited = new Map(); //记录单词对应路径长度
    visited.set(beginWord, 1);

    while (queue.length){
        let word = queue.shift();
        let path = visited.get(word);
        for (let i = 0; i < word.length; i++){
            for (let j = 0; j < 25; j++){
                let temp = String.fromCharCode((97 + j));
                let newWord = word.slice(0, i) + temp + word.slice(i + 1);
                console.log(i, j, newWord);
                if (newWord === endWord){
                    return path + 1;
                }
                // 如果新单词在set中，但是没有访问过
                if (wordSet.has(newWord) && !visited.has(newWord)){
                    visited.set(newWord, path + 1); //记录单词对应的路径长度
                    queue.push(newWord); //加入队尾
                }
            }
        }
    }
    return 0;
}

let b = "ymain";
let e = "oecij";
let wl = ["ymann","yycrj","oecij","ymcnj","yzcrj","yycij","xecij","yecij","ymanj","yzcnj","ymain"]
let res = solution1(b, e, wl);
console.log(res);