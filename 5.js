// A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking. If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again. Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible in the worst-case scenario.
function highestFloor(n) {
  let minFloor = 1;
  let maxFloor = n;
  let drops = 0;

  while (minFloor <= maxFloor) {
    const currentFloor = Math.floor((minFloor + maxFloor) / 2);
    drops++;

    // Use the first egg to perform the binary search-like approach
    if (dropEgg(currentFloor)) {
      // Egg broke, so the highest floor is below the current floor
      maxFloor = currentFloor - 1;
    } else {
      // Egg didn't break, so the highest floor is at or above the current floor
      minFloor = currentFloor + 1;
    }
  }

  // Use the second egg to verify the highest floor
  const highestFloor = maxFloor;
  if (dropEgg(highestFloor)) {
    return highestFloor - 1;
  } else {
    return highestFloor;
  }
}

console.log(highestFloor(5));
