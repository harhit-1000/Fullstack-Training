function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remaining, combination, start) {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }
        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(remaining - candidates[i], combination, i); // not i+1 since we can reuse same number
            combination.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));

