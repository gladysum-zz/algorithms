function makeElementsNoClosure(){
  
  var tags = ["h1", 'div', 'span', 'form', 'a', 'h2', 'h3', 'h4'],
      create = {};
      
  for(var i = 0; i < tags.length; i++){
    create[tags[i]] = function(){
      return tags[i]
    }
  }
  
  return create;
}
