function groupAnagram(arrOfStr){
  const m = new Map();
  for(str of arrOfStr)
  {
    const key = str.split('').sort().join(''); 
    if(!m.has(key))
    {
      m.set(key,[]);
    }
    m.get(key).push(str);
  }
  return m;
}


console.log(groupAnagram(['apple','banana','paple','ok','ko']));