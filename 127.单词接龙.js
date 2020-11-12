/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    return solution1(beginWord, endWord, wordList);
};

/**
 * 
 * public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        HashSet<String> wordSet = new HashSet<>(wordList); //转换为hashset 加快速度
        if (wordSet.size() == 0 || !wordSet.contains(endWord)) {  //特殊情况判断
            return 0;
        }
        Queue<String> queue = new LinkedList<>(); //bfs 队列
        queue.offer(beginWord);
        Map<String, Integer> map = new HashMap<>(); //记录单词对应路径长度
        map.put(beginWord, 1);

        while (!queue.isEmpty()) {
            String word = queue.poll(); //取出队头单词
            int path  = map.get(word); //获取到该单词的路径长度
            for (int i = 0; i < word.length(); i++) { //遍历单词的每个字符
                char[] chars = word.toCharArray(); //将单词转换为char array，方便替换
                for (char k = 'a'; k <= 'z'; k++) { //从'a' 到 'z' 遍历替换
                    chars[i] = k; //替换第i个字符
                    String newWord = String.valueOf(chars); //得到新的字符串
                    if (newWord.equals(endWord)) {  //如果新的字符串值与endWord一致，返回当前长度+1
                        return path + 1;
                    }
                    if (wordSet.contains(newWord) && !map.containsKey(newWord)) { //如果新单词在set中，但是没有访问过
                        map.put(newWord, path + 1); //记录单词对应的路径长度
                        queue.offer(newWord);//加入队尾
                    }
                }
            }
        }
        return 0; //未找到
    }
 */
var solution1 = function (beginWord, endWord, wordList){
    let wordSet = new Set(wordList);
    // 如果字典为空或 endWord不在字典里，直接返回
    if (wordSet.size === 0 || !wordSet.has(endWord)){
        return 0;
    }

    const queue = [];
    queue.push(beginWord);
    let map = new Map(); //记录单词对应路径长度
    map.set(beginWord, 1);

    while (queue.length){
        let word = queue.shift();
        let path = map.get(word);
        for (let i = 0; i < word.length; i++){
            for (let j = 0; j < 25; j++){
                let temp = String.fromCharCode((97 + j));
                let newWord = word.slice(0, i) + temp + word.slice(i + 1);
                if (newWord === endWord){
                    return path + 1;
                }
                // 如果新单词在set中，但是没有访问过
                if (wordSet.has(newWord) && !map.has(newWord)){
                    map.set(newWord, path + 1); //记录单词对应的路径长度
                    queue.push(newWord); //加入队尾
                }
            }
        }
    }
    return 0;
}
// @lc code=end

