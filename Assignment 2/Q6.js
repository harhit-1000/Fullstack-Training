function minimum_insertion(str){

  open=0;
  close=0;
    for(s of str)
      {
      if(s=='(')
        open++;
      else if(s==')')
        close++;
    }
    if(open>close)
    return open-close;
  else
  return close-open;
}

console.log(minimum_insertion("(()))()))"));