// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}


// =====================
// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free
const age = 90;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// ==== 무료만 입장 가능 ====
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}


// =====================
let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN!!!");
}


// ==== switch case ====

// if-else 구문
const day = 2;
if (day === 1) {
    console.long("MONDAY")
} else if (day === 2) {
    console.log("TUESDAY")
} else if (day === 3) {
    console.log("WENDSEDAY")
} else if (day === 4) {
    console.log("THURSDAY")
} else if (day === 5) {
    console.log("FRIDAY")
} else if (day === 6) {
    console.log("SATURDAY")
} else if (day === 7) {
    console.log("SUNDAY")
} else {
    console.log("I DON'T KNOW THAT!")
}

// switch-case
const day = 4;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WENDSEDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("I DON'T KNOW THAT!")
        break;
}