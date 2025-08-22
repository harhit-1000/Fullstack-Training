function longestSubString(str){
  let count =1;
  let prev=str[0];
  let max=count;
  for(let i=1; i<str.length;i++){
    if(prev !== str[i])
    {
      count++;
      prev=str[i]
    }
    else
    {
      if(count>max)
      max=count;
      count=1;
    }
  }
  if(count>max)
      max=count;

  return max;
}


console.log(longestSubString("helloHi"));


