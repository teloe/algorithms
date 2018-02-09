// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – 
// maybe even more than one. 
// Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, 
// a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. 
// He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. 
// Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

/* jshint esversion: 6 */

let num = 4;

let sweatshirtPricing = (num) => {
  let cost = 20 * num;
  if (num == 2) {
    cost = cost - cost * 0.09;
  } else if (num == 3) {
    cost = cost - cost * 0.19;
  } else if (num >= 4) {
    cost = cost - cost * 0.35;
  }
  return cost;
}

sweatshirtPricing(num);