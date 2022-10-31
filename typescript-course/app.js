function add(n1, n2, print, phrase) {
    var result = n1 + n2;
    if (print) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 2.9;
var printResult = true;
var resultPhrase = "this is the number: ";
add(num1, num2, printResult, resultPhrase);
