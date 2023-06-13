/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    nums2.splice(n)
    nums1.push(...nums2)
    nums1.sort(function(a,b){return a - b})
  };
  
  ///P: num 1 (array), num 2 (array), m is numbers to be merged of nums1 and n is numbers to be merged of nums2
  
  //should result in a merged array of non-decending numbers with 0-m and 0-n 
  
  //e: nums1.length == m + n nums2.length == n0 <= m, n <= 2001 <= m + n <= 200 -109 <= nums1[i], nums2[j] <= 109
  
  //psuedo: slice nums1 of (0, m), slice nums2 (0, n), new array nums1 + nums2, sort