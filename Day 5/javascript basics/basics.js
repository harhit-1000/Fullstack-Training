let name = prompt("Enter your name",'guest');
alert("hello " + name);

let num = prompt("Enter a number",2);


const PI =3.14
const radius  = 5;
const shape = "circle";
let avialable = true;
console.log("PI "+ PI + " radius " + radius + " shape " + shape + " avialable " + avialable);

console.log("area "+ PI * radius * radius)

if(num%2 == 0 ){
  console.log("even number")
}
else{
  console.log("odd number")
}


  console.log("number 1 to 20");

for(let i=0; i<20; i++){
  console.log(i);
}


  console.log("Table of 5");

for(let i=5; i<=50; i+=5){
  console.log(i);
}

celciusToFahrenheit = (celcius) =>(((9/5)*celcius) + 32);
celcius = prompt("Enter the temperature in Celcius", 0);
fahrenheit = celciusToFahrenheit(celcius);
console.log(`${celcius} Celcius is equal to ${celcius} Fahrenheit`);


num = prompt("Enter the number for calculating factorial", 1);
factorial  = (num) => {
  if(num === 0 || num === 1){
    return 1;
  }
  let result = 1;
  for(let i=2; i< num; i++){
    result *= i;
    console.log(result);

  }
}
age = prompt("Enter your age", 0)
console.log(`Hello ${name}, you are ${age} years old.`);
