function subArrayEqualsK(k,arr){
  let count  = 0;

  for(let i=0; i< arr.length; i++){
      let sum = 0;
    for(let j=i; j<arr.length; j++)
    {
       sum += arr[j];
      if(sum == k )
        count++;
    }
  }
  return count;
}

arr = [1,2,3,4,5];
k=5;
ans = subArrayEqualsK(k,arr);
console.log(`The number of subarrays that sum to ${k} is: ${ans}`);

