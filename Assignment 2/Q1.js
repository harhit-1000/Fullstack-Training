// Two sum sorted array.
// prompt-sync required to run this code.

const prompt = require('prompt-sync')();

const num = prompt('Enter the number of elements in the array:');
const arr= [];

for (let i=0; i< num; i++){
    arr[i] = parseInt(prompt(`Enter element ${i + 1}:`),10);
}
const target = parseInt(prompt('Enter the target value:'),10);

for(let i=0; i< num; i++){
  for(let j=i++; i<num; j++){
    if(arr[i] + arr[j] == target )
    {
      console.log(`the indices of the two number are ${i+1} and ${j+1}`);
      break;
    }
    else {
      if(i == num-2 && j == num-1) {
        console.log('No two number found that add up to the target value.');
      }
    }
  }
}