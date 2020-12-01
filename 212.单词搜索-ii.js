/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
	constructor(isWord = "", next = new Array(26)) {
		this.isWord = isWord;
		this.next = next;
	}
	setEnd(word) {
		this.isWord = word;
	}
	getEnd() {
		return this.isWord;
	}
	put(ch, node) {
		this.next[getIndex(ch)] = node;
	}
	get(ch) {
		return this.next[getIndex(ch)];
	}
	containsKey(ch) {
		return this.next[getIndex(ch)] !== undefined;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let node = this.root;
		for (const ch of word) {
			if (!node.containsKey(ch)) {
				node.put(ch, new TrieNode());
			}
			node = node.get(ch);
		}
		node.setEnd(word);
	}
	searchPrefix(prefix) {
		let node = this.root;
		for (const ch of prefix) {
			if (node.containsKey(ch)) {
				node = node.get(ch);
			} else {
				return undefined;
			}
		}
		return node;
	}
	search(word) {
		let node = this.searchPrefix(word);
		return node !== undefined && node.getEnd() !== "";
	}
	startsWith(word) {
		let node = this.searchPrefix(word);
		return node !== undefined;
	}
	contains(ch, node) {
		const index = ch.charCodeAt() - 97;
		return node.next[index] !== undefined;
	}
}
var getIndex = function (ch) {
	return ch.charCodeAt() - 97;
};

var findWords = function (board, words) {
	// construct tree
	let tree = new Trie();
	for (const word of words) {
		tree.insert(word);
	}
	// set default value for board
	const x = [-1, 1, 0, 0];
	const y = [0, 0, -1, 1];
	const res = [];

	const dfs = function (board, i, j, root) {
		let node = root.next[getIndex(board[i][j])];
		if (node.isWord !== "") {
			res.push(node.isWord);
			node.isWord = "";
		}
		const ch = board[i][j];
		board[i][j] = ".";
		for (let k = 0; k < 4; k++) {
			let newi = i + x[k];
			let newj = j + y[k];
			if (
				newi < 0 ||
				newj < 0 ||
				newi >= board.length ||
				newj >= board[0].length ||
				board[newi][newj] === "."
			) {
				continue;
			}
			if (tree.contains(board[newi][newj], node)) {
				dfs(board, newi, newj, node);
			}
		}
		// restate
		board[i][j] = ch;
	};

	// start dfs
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (tree.contains(board[i][j], tree.root)) {
				dfs(board, i, j, tree.root);
			}
		}
	}

	return res;
};
// @lc code=end
