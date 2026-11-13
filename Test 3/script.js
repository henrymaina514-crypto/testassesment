console.log("1. Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("\n2. Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\n3. Odd numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("\n4. Sum of numbers from 1 to 20:", sum);  // 210

console.log("\n5. Numbers from 20 down to 1:");
for (let i = 20; i >= 1; i--) {
  console.log(i);
}