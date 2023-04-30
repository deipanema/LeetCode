/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  let result = []
  
  for (let i = 1; i <= nums.length; i++){
      if (!nums.includes(i)){
          result.push(i);
      }
  }
  
  return result;
};