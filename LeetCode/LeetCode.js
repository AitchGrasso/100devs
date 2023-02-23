
//897. Increasing Order Search Tree
//status: FAIL - What is are nodes? And how do I work with them?
//URL: https://leetcode.com/problems/increasing-order-search-tree/description/

//1480. Running Sum of 1d Array
//status: COMPLETED
//URL: https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

var runningSum = function(nums) {

    let lastSum = 0

    function addPrevious(x){
        lastSum = lastSum + x
        return lastSum
    }

    return nums.map( x => addPrevious(x))

}    

