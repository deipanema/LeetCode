/**
 * @param {string} s
 * @return {number[][]}
 */
// 투 포인터
const largeGroupPositions = function(s) {
  let left = 0;
  let right = 0;
  let flag = 0;
  const result = [];

  for(let i = 0; i < s.length; i++){
    if(flag !== s[i]) {
      if(3 <= right - left + 1 ) result.push([left, right]);

      flag = s[i];
      left = i;
      right = left;
    } else if (flag === s[i]) {
      right++;
    } 

    if(i === s.length - 1){
      if(3 <= right - left + 1 ) result.push([left, right]);
    }
  }

  return result;
};