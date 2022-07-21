// "", '' 둘 다 사용 가능하지만 일관성 유지하기
const bestColor = "purple";
let quote = 'You had me ar "hello"';

// index: starting at Zero
bestColor[0]; // 'p'
bestColor[4]; // 'l'
bestColor[99]; // undefined
"lol"[0]; // "l"

bestColor.length; // 6
"lol".length; // 3

// String methods: thing.method();
'leave me alone'.toUpperCase(); // "LEAVE ME ALONE";
'LOL!!'.toLowerCase(); // "lol!!"
'    omg  '.trim(); // 양쪽 공백 삭제 "omg"
'     hello again!!!    '.trim().toUpperCase(); // "HELLO AGAIN!!!"

// String methods with arguments:
// indexOf(arg) arg의 인덱스 반환, 없는 경우 -1 반환
'spider'.indexOf('i'); // 2
'vesuvius'.indexOf('u'); // 3 
'cactus'.indexOf('z'); // -1

// 슬라이싱
"pancake".slice(3); //"cake" 3부터 끝까지
"pancake".slice(0, 3); //"pan" 0부터 2까지
"pancake".slice(-3); // "ake" 뒤에서부터 3개

// replace, repeat
"pump".replace("p", "b"); //"bump"
"lol".repeat(3); // "lollollol"

// String Template Literals
// Use backtick characters(`)!
const color = "blue";
const msg = `My favorite color is: ${color}` //"My favorite color is: blue"
const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

let candy = "candy"
let candyPrice = 10;
let candyNum = 5;
`You bought ${candyNum} ${candy.toUpperCase}. Total is: $${candyPrice * candyNum}`;

// Math Object
Math.PI // 3.141592...
Math.round(4.9) // 5 (반올림)
Math.abs(-456) // 456
Math.pow(2, 5) // 32
Math.ceil(34.1) // 35 (올림)
Math.floor(3.999) // 3 (내림)

Math.random(); // 0부터 1까지 소수점 숫자을 임의로 생성, 1은 제외
Math.floor(Math.random() * 10) + 1; // 1부터 10