// 1929. Concatenation of Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// My answer:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    //parameter: nums which is an integer array with a length of n. 
 //    return: array of ans of lenth 2n (length is doubled) and ans[i] == nums[i] 
 // and ans[i + n] (n meaning length) == nums[i] for 0 <= i < n (length) which means ans in the concatenation of the
 // two nums arrays. The return is ans
 let ans = []
 for (let i = 0; i < 2; i++){
     for (let n = 0; n < nums.length; n++){
         ans = ans.concat(nums[n])
     }
 }
 return ans
 };

// Optimal for time/space

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++){
        ans[i] = nums[i];
        ans [i + nums.length] = nums[i]
    }
    return ans
    };

    