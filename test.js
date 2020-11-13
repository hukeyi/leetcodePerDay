
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
            for (let j = 0; j <= 25; j++){
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