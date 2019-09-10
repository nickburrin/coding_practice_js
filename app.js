import { ListNode } from './data_structures.js'

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

var removeNthFromEnd = function(head, n) {
  if (!head) return head

  let dummy = new ListNode(-1)
  dummy.next = head

  let nodes = []
  while(head) {
    nodes.push(head)
    head = head.next
  }

  let removeIdx = nodes.length - n
  nodes[removeIdx-1].next = nodes[removeIdx].next
  nodes[removeIdx] = null

  return dummy.next
};

var maxProfit = function(prices) {
  if (prices.length <= 1) return 0
  
  let futureMaxPrices = memoize(prices)

  let result = 0
  for (let i = 0; i < prices.length; i++) {
    let profit = futureMaxPrices[i] - prices[i]
    result = profit > result ? profit : result
  }

  return result
};

var memoize = (prices) => {
  let memo = []
  memo[prices.length-1] = prices[prices.length-1]
  for (let i = prices.length-2; i >= 0; i--) {
    memo[i] = Math.max(prices[i], memo[i+1])
  }

  return memo
}

var maxProfit_multipleBuys = function(prices) {
  if (prices.length <= 1) return 0

  let buyPrice = prices[0]
  let sellPrice = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      sellPrice = prices[i]
      profit += sellPrice - buyPrice
      buyPrice = prices[i]
    } else {
      buyPrice = prices[i]
    }
  }

  return profit
}

var findSingleNumber = function(nums) {
  if (nums.length == 0 || nums.length % 2 == 0) return null
  if (nums.length == 1) return nums[0]

  let set = []
  for(let n of nums) {
    if (set.includes(n))
      set.splice(set.indexOf(n), 1)
    else
      set.push(n)
  }

  return set[0]
};

var deleteDuplicates = function(head) {
  if (head.next == null) return head

  var set = new Set()
  set.add(head.val)

  var curr = head.next
  var last = head

  while (curr != null) {
    if (set.has(curr.val)) {
      last.next = curr.next
    } else {
      set.add(curr.val)
      last = curr
    }

    curr = curr.next
  }

  return head
};

var threeSum = function(nums) {
  if (nums.length < 3) return []

  let n = nums.length
  let result = []
  nums.sort((a,b) => a-b)
  for (let i = 0; i < n-2; i++) {
    if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
      let sum = 0 - nums[i]
      let begin = i+1
      let end = n-1

      while (begin < end) {
        if (nums[begin] + nums[end] == sum) {
          result.push([nums[i], nums[begin], nums[end]])
          
          while (begin < end && nums[begin] == nums[begin+1]) begin++
          while (begin < end && nums[end] == nums[end-1]) end--
          begin++
          end--
        } else if (nums[begin] + nums[end] < sum) {
          begin++
        } else {
          end--
        }
      }
    } else if (nums[i] > 0) break
  }

  return result
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n == 0) return []
  if (n == 1) return ["()"]

  let combos = new Set()
  generateParenthesis(n-1).map(x => {
    combos.add(`(${x})`)
    combos.add(`()${x}`)
    combos.add(`${x}()`)
  })
  
  return Array.from(combos)
};

function eqSet(a, b) {
  if (a.size !== b.size) return false;
  for (var a of a) if (!b.has(a)) return false;
  return true;
};

const n2 = new Set(["(())", "()()"])
const n3 = new Set(["((()))","(()())","(())()","()(())","()()()"])
const n4 = new Set(["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"])
let result = generateParenthesis(2)
console.log(eqSet(result, n2))
