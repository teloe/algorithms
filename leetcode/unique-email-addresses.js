'use strict';

/**
 * @param {string[]} emails
 * @return {number}
 */

const numUniqueEmails = function(emails) {
    const resultEmails = new Set();
    emails.forEach(e => {
      const [local, domain] = e.split('@');
      const actualEmail = local.split('+')[0].replace(/\./g, '') + '@' + domain
  
      resultEmails.add(actualEmail)
    });
    return resultEmails.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com",
                             "test.e.mail+bob.cathy@leetcode.com",
                             "testemail+david@lee.tcode.com"])); // 2