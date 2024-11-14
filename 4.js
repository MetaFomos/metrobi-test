//  Write an efficient method that tells us whether or not an input string brackets ("{", "}","(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,“{([)]}” => false
function areBracketsBalanced(str) {
  const stack = [];
  const openingBrackets = ["{", "(", "["];
  const closingBrackets = ["}", ")", "]"];
  const bracketPairs = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (bracketPairs[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(areBracketsBalanced("{[{()}{})]}"));
