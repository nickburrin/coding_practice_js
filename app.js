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

var lengthOfLastWord = function(s) {
    s = s.trim()
    if (!s) return 0;

    strings = s.split(' ')
    return strings[strings.length-1].length
};

var zigZagConversion = function(s, numRows) {
  if (!s || s.length == numRows || numRows <= 1) return s

  let down = true
  let row = 0
  let rows = []
  for (let i = 0; i < s.length; i++) {
    if (i < numRows)
      rows[row] = s[i]
    else
      rows[row] += s[i]

    if (row == numRows-1 && down)
      down = false
    else if (row == 0 && !down)
      down = true

    row = down ? row+1 : row-1
  }

  let result = ''
  for (s of rows)
    result += s
    
  return result
};

var maxArea = function(height) {
  if (height.length < 2) return 0

  var left = 0
  var right = height.length-1
  
  var maxArea = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left)
    if (area > maxArea)
      maxArea = area

    if (height[left] < height[right])
      left++
    else 
      right--
  }

  return maxArea
}

var height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))
var height = [1]
console.log(maxArea(height))
var height = [1,8]
console.log(maxArea(height))
var height = []
console.log(maxArea(height))
