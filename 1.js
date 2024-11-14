//Write a javascript function that finds the duplicate items in any given array.

function findDuplicates(arr) {
  // Create an object to store the count of each element
  const elementCount = {};

  // Iterate through the array and count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  }

  // Create an array to store the duplicate elements
  const duplicates = [];

  // Iterate through the elementCount object and add the elements with a count greater than 1 to the duplicates array
  for (const element in elementCount) {
    if (elementCount[element] > 1) {
      duplicates.push(element);
    }
  }

  return duplicates;
}

console.log([1, 2, 3, 4, 2, 1]);
