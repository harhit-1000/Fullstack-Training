function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(r, c, index) {
        if (index === word.length) return true; // all characters matched
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) return false;

        const temp = board[r][c];
        board[r][c] = '#'; // mark as visited

        // explore all 4 directions
        const found = backtrack(r + 1, c, index + 1) ||
                      backtrack(r - 1, c, index + 1) ||
                      backtrack(r, c + 1, index + 1) ||
                      backtrack(r, c - 1, index + 1);

        board[r][c] = temp; // restore after backtracking
        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && backtrack(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE"));    // true
console.log(exist(board, "ABCB"));   // false

