const add = (a, b) => a + b;

const composedFunction = (a,b,c,d) => a*b/c+d;

const curry = a=>b=>c=>d=>a*b/c+d;

//console.log(composedFunction(2,6,4,5));

console.log(curry(2)(6)(4).toString())