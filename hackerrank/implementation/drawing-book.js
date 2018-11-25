'use strict';

/**
 * Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from
 * the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book,
 * page  is always on the right side:
 *
 * When she flips page , she sees pages  and . Each page except the last page will always be printed on both sides. The
 * last page may only be printed on the front, given the length of the book. If the book is  pages long, and she wants
 * to turn to page , what is the minimum number of pages she will turn? She can start at the beginning or the end of the
 * book.
 *
 * Given  and , find and print the minimum number of pages Brie must turn in order to arrive at page p.
 */

function pageCount(n, p) {
  if (p === n || p === 1) {
    return 0;
  }
  else if (p === 2 || p === 3)  {
    return 1;
  }
  else if (n % 2 === 0) {
    if (p === (n - 1) || p === (n - 2)) return 1;
  }
  else if (n % 2 !== 0) {
    if (p === (n - 1)) return 0;
  }
  else if (p < (n / 2)) {
    return Math.floor(p / 2);
  } 
}

console.log(pageCount(6, 2)); // 1
console.log(pageCount(5, 4)); // 0
