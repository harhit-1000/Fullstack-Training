function productOfArrayExceptItSelf (arr){
  const products = [];
  for(let i=0; i< arr.length; i++){
    products[i] = mutiply(arr.slice(0,i))*mutiply(arr.slice(i+1,arr.length));
    }
    return products;
  }

function mutiply(arr){
  let result = 1;
  for(let i=0; i< arr.length; i++){
    result *= arr[i];
  }
  return result;
}

const products = productOfArrayExceptItSelf([1,2,3,4]);
console.log(products);
