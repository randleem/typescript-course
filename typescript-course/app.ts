function add(n1: number, n2: number, print: boolean, phrase: string) {
  let result = n1 + n2;
  if (print) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
const num1 = 5;
const num2 = 2.9;
const printResult = true;
const resultPhrase = "this is the number: ";

add(num1, num2, printResult, resultPhrase);
