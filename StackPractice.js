/* eslint-disable no-undef */
const Stack = require("./Stack");

function main() {
  const starTrek = new Stack();

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

  console.log(starTrek);
  display(starTrek);
  starTrek.pop();
  console.log(starTrek);
  console.log(peek(starTrek));
  display(starTrek);

  const emptyStack = new Stack();
  console.log(isEmpty(starTrek));
  console.log(isEmpty(emptyStack));
  display(emptyStack);
}

function peek(stack) {
  if (stack.top === null) {
    return;
  }

  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}
function display(stack) {
  let currStack = stack.top;

  if (stack.top === null) {
    return null;
  }
  while (currStack !== null) {
    console.log(currStack.data);
    currStack = currStack.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let palindrome = new Stack();
  let newS = '';

  for(let i =0 ; i < s.length ; i++){
      palindrome.push(s[i]);
  }
  while(palindrome.top !==null){
      newS += palindrome.pop();
  }
  return s === newS;
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function sort(stack) {
  if (!stack.top.next) {
    return stack;
  }
  let newStack = new Stack();

  while (stack.top) {
    let temp = stack.pop();
    while (newStack.top && newStack.top.data < temp) {
      stack.push(newStack.pop());
    }
    newStack.push(temp);
  }
  display(newStack);
  return sort;
}

let testStack = new Stack();
testStack.push(8);
testStack.push(11);
testStack.push(1);
testStack.push(200);
sort(testStack);

main();
