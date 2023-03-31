/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  const obj = {};
  let result = 0;

  for(const elem of nums){
    obj[elem] = (obj[elem] || 0 ) + 1;
  }

  for(const value of Object.values(obj)){
    if(value === 2){
      result = result + 1;
    } else if (3 <= value){
      result = result + (value * (value - 1)) / 2;
    } 
  }

  return result;
};