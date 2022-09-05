const fibonacci = (n) => {
  // your code here
  const fib = [1,1];

  if(n==1){
    console.log("si n es 1 devuelve " + n);
    return [n];
  }
  else if(n==2){
    console.log("si n es 2 devuelve " + fib);
    return fib
  }else{
    for(let i = 2; i < n; i++){
      fib[i] = fib[i-1] + fib[i-2];
    }
  }
  console.log(fib)
  return fib
};

module.exports = fibonacci;