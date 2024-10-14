const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const fsResult = fs.readFileSync(filePath).toString();
const [firstLine, secondLine] = fsResult.trim().split("\n");
const [_, targetTree] = firstLine.split(" ");
const trees = secondLine.split(" ");

function binaryTree() {
  let left = 0;
  let right = Math.max(...trees);
  let result = -Infinity;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let sum = 0;
    for (let tree of trees) {
      if (tree > middle) sum += tree - middle;
    }
    if (sum >= targetTree) {
      if (middle > result) {
        result = middle;
      }
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
}

console.log(binaryTree());
