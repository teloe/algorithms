/*
 * Write function rTrib(num) to mimic Fibonacci, adding previous three values
 * instead of two . First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1
 * (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4).
 * Handle negatives and non-integers appropriately and inexpensively.
 */

function rTrib(num) {
  if (num <= 1) {
    return 0;
  }
  if (num == 2) {
    return 1;
  }
  return rTrib(num -1) + rTrib(num - 2) + rTrib(num - 3);
}

console.log(rTrib(4)); // 2
console.log(rTrib(5)); // 4
console.log(rTrib(6)); // 7

