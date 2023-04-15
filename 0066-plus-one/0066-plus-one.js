/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    const digit = digits.join("");
    return [...(BigInt(digit) + BigInt(1))+""].map(Number)
};