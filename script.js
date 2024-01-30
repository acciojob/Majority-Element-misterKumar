  
function findMajorityElement(arr){
  let candidate;
  let count = 0;

 
  for (const num of arr) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }


  count = 0;
  for (const num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
   
   
    return -1; 
  }
}


const inputArray = [2, 1, 2];
const majorityElement = findMajorityElement(inputArray);
console.log(majorityElement); 