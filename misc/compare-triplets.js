/*
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the
 * two challenges, awarding points on a scale from  to  for three categories:
 * problem clarity, originality, and difficulty.
 *
 * We define the rating for Alice's challenge to be the triplet , and the rating
 * for Bob's challenge to be the triplet .
 *
 * Your task is to find their comparison points by comparing  with ,  with , and
 * with .
 *
 * If , then Alice is awarded  point.
 * If , then Bob is awarded  point.
 * If , then neither person receives a point.
 * Comparison points is the total points a person earned.
 *
 * Given  and , can you compare the two challenges and print their respective
 * comparison points?
 */

function solve(){
  var a = [5, 6, 7];
      b = [3, 6, 10];
      alice = 0;
      bob = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] < b[i]) {
      bob += 1;
    }
  }
  return [alice, bob];
}

console.log(solve());
