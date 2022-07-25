// Making an array:
let color = [];
color[5] = 'indigo' // [empty × 5, 'indigo']
let lotto = [12, 34, 4, 10, 1, 20];
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
colors.pop() // 마지막 지워줌
colors.push("pink") // push

// unshift(val) 앞에 push
// shift() 맨 앞을 반환하고 지워줌

// concats
let cats = ['blue', 'kitty']
let dogs = ['ddori', 'woori']
cats.concat(dogs) // ['blue', 'kitty', 'ddori', 'woori']

// includes
cats.includes('blue')  // true

// indexOf
'blue'.indexOf('0') // -1
'blue'.indexOf('e') // 3

// reverse
cats.concat(dogs).reverse() // ['woori', 'ddori', 'kitty', 'blue']

// slice
colors = ["red", "orange", "yellow", "pink", "green"];

colors.slice(3) // ['yellow', 'pink', 'green']
colors.slice(2, 4) // ['yellow', 'pink']

// splice
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.splice(5, 1) // 인디고 삭제

colors.splice(1, 0, 'red-orange') // ['red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'violet']

// sort
let scores = [1, 70, 100, 2500, 9, -12, 0, 34]
//[-12, 0, 1, 100, 2500, 34, 70, 9] 앞 자리만 정렬해줌