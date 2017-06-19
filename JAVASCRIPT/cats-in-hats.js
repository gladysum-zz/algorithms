// You have 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, you visit every door and toggle the door (if the door is closed, you open it; if it is open, you close it). The second time you only visit every 2nd door (door #2, #4, #6, ...). The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

// What state are the doors in after the last pass? Which are open, which are closed?

// SOLUTION: Each door is an integer whoses absolute value is an integer from 1 to 100. Positive numbers represent closed doors, while negative numbers represent open doors. All doors start out closed, hence positive. Each time you visit a door, you multiply it by -1, which changes its status from closed to open or open to closed. First you visit every door, then every door whose number is divisible by 2, then every door whose number is divisible by 3... When you are done visiting the doors, the open doors are the ones whoses number is negative.

//Helper function that creates an array of the first n integers.
const createArray = n => {
  let arr = [];
  for (let i = 1; i <= n; i ++) {
    arr.push(i);
  }
  return arr;
}

//Helper function that returns true if a number is negative and false otherwise.
const isNegative = n => {
  return n < 0;
}

//Function that returns the doors that are open (negative).
const hundredDoors = () => {
  let arr = createArray(100);

  for (n = 1; n <= 100; n ++) {
    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] % n === 0) {
        arr[i] *= -1;
      }
    }
  }

  return arr.filter(isNegative);
}

hundredDoors();