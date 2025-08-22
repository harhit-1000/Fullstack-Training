function rob(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let prev1 = 0; // dp[i-2]
    let prev2 = 0; // dp[i-1]

    for (let num of nums) {
        let temp = Math.max(prev2, prev1 + num);
        prev1 = prev2;
        prev2 = temp;
    }

    return prev2;
}

console.log(rob([2, 7, 9, 3, 1])); // Output: 12

