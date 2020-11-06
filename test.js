var solution2 = function(nums){
    let res = [[]];

    for (let num of nums){ // 每一轮，都把num加到当前所拥有的子集中去，然后作为新子集加到res
        const len = res.length;
        for (let i = 0; i < len; i++){
            let newSubset = res[i].concat([num]);
            res.push(newSubset);
        }
    }
    return res;
}

let test = [1,2,3];
let res = solution2(test);
console.log(res);