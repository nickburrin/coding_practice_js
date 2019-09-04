var lengthOfLongestSubstring = function(s) {
  let curr = ''
  let length = 0
  let longest = 0
  for (let c of s) {
    if (curr.includes(c)) {
      longest = length > longest ? length : longest
      let atIndex = curr.indexOf(c)
      curr = curr.substring(atIndex+1, length) + c
      length = curr.length
    }
    else {
      curr += c
      length++
    }
  }

  return length > longest ? length : longest
};

var myAtoi = function(str) {
  function isNum(c) {
    return c >= '0' && c <= '9';
  };

  str = str.trim();
  if (!str) return 0

  let negative = 1;
  if(!isNum(str[0])) {
    if (str[0] == '-' || str[0] == '+') {
      negative = str[0] == '-' ? -1 : 1
      str = str.slice(1)
    }
    else
      return 0
  }

  let i = 0
  let list = []
  while (isNum(str[i])) {
    list += str[i]
    i++
  }

  let INT_MIN = Math.pow(-2, 31)
  let INT_MAX = Math.pow(2, 31) - 1
  let result = 0
  let mult = Math.pow(10, i-1);
  for(n of list) {
    result += parseInt(n) * mult * negative
    mult /= 10

    if (result > INT_MAX) return INT_MAX
    if (result < INT_MIN) return INT_MIN
  }

  return result
};

var testString = '42'
console.log(myAtoi(testString))
testString = '-42'
console.log(myAtoi(testString))
testString = '    -42'
console.log(myAtoi(testString))
testString = '4193 with words'
console.log(myAtoi(testString))
testString = 'words and 987'
console.log(myAtoi(testString))
testString = '-91283472332'
console.log(myAtoi(testString))
