/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const obj = {};
    let max = 0;
    let result = 0;

    for(const value of nums){
      obj[value] = (obj[value] || 0) + 1;
    }

    for(const [key, value] of Object.entries(obj)){
      max = Math.max(max, value);
      if(max === value) result = key;
    }

    return result;
};