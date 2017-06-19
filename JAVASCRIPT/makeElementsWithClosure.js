function makeElementsWithClosure(){
  
  var tags = ["h1", 'div', 'span', 'form', 'a', 'h2', 'h3', 'h4'],
      create = {};
      
  for(var i = 0; i < tags.length; i++){
      (function(tag){
        create[tag] = function(){
        return tag;
      };
    })(tags[i]);  
    
  }
  
  return create;
}


