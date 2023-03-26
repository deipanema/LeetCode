/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const maxDepth = function(root) {
  let result = 1;

  function traverse(node, level){
    if(node.left) traverse(node.left, level+1);
    if(node.right) traverse(node.right, level+1);
    result = Math.max(result, level)
  }

  if(!root) return 0;
  traverse(root, result);
  
  return result; 
};
