function once(f) {
  let called = false;
  return function(){
    if (!called) {
      f();
      called = true;
    }
  }
}

h = once(console.log)
console.log(h("abc"))
console.log(h("def"))
