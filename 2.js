// Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.

async function printArrayWithDelay(arr) {
  let delay = 1000; // 1 second

  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    console.log(arr[i]);
    delay *= 2; // Double the delay for the next item
  }
}

console.log([1, 2, 3, 4, 5]);
