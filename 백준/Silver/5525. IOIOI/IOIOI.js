const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const fsResult = fs.readFileSync(filePath).toString();
const [continuous, strLen, str] = fsResult.trim().split("\n");

let count = 0;
let left = 0;
let right = 1;
let result = 0;

// 해야하는것
// 1. right 는 O를 만나면 오른쪽으로 idx를 옮김
// 2. right가 I를 만나면 left가 I인지 확인, idx차가 2인지 확인
// 3. 만약 틀렸다면 -> count를 0으로 바꾸고 left의 idx를 right로 옮긴 후 right의 idx + 1
// 4. 만약 맞다면 -> count를 1 증가, left의 idx를 right로 옮긴 후 right의 idx + 1
// 5. 매 반복의 마지막에 count를 result로 바꾸는 로직 (count == continuous) count를 -1 result + 1 증가

while (right < strLen) {
  if (str[right] === "O") {
    right += 1;
  } else if (str[right] === "I") {
    count = str[left] === "I" && right - left === 2 ? count + 1 : 0;
    left = right;
    right += 1;
  }
  if (count === +continuous) {
    result += 1;
    count -= 1;
  }
}

console.log(result);
