/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  const obj = {};

  indices.forEach((value, index)=> obj[value] = s.slice(index,index+1));

  return Object.values(obj).join(""); 
};