/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const obj = {}; 

  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] != null) {
      return [obj[target - nums[i]], i];
    }

    obj[nums[i]] = i;
  }
};