const timeConversion = (s) => {
  const arr = s.slice(0,8).split(':');
  arr[0] = (s.indexOf('PM') > -1) ?
           (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
           (arr[0] == 12 ? '00' : arr[0]);
  return arr.join(':');
}

let s = '07:05:45PM';
console.log(timeConversion(s)); // '19:05:45'
