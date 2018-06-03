// Write a function that takes an array of numbers
// and a target number.
// It should find two different items in the array
// that, when added together,
// give the target value. 
// The indices of these items should then be returned
// in an array like so: [index1, index2].

let twoSumTempVars = function (nums, target) {
    const tmp_nums = nums
    const tmp_target = target
    let result = []
    for (let i = 0; i < tmp_nums.length; i++) {
      const value = tmp_target - tmp_nums[i]
      const isMatched = tmp_nums.findIndex((el) => el === value)
      if (tmp_nums.includes(value) && isMatched) {
        result = [i, isMatched]
        break
      }
    }
    return result
  }
  
  console.log(twoSum([3, 2, 4], 6))


  // brute force : O(n^2)

  let twoSumBrute = function (nums, target) {
      for (i=0; i < nums.length; i++) {
          for (j=i+1; j < nums.length; j++) {
              if (nums[j] = target - nums[i]) {
                  return [i, j];
              }
          }
      }
      throw new Error("no solution!");
  } 

 // one pass hash table 

// our two sum function which will return
// all pairs in the array that sum up to target
function twoSum(arr, target) {

    var sums = [];
    var hashTable = {};
  
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
      // calculate target - current element
      var sumMinusElement = target - arr[i];
      // check if this number exists in hash table
      // if so then we found a pair of numbers that sum to S
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
      }
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
    }
    // return all pairs of integers that sum to S
    return sums;
  }
  
console.log( twoSum([3, 5, 2, -4, 8, 11], 7));