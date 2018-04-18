window.jquery=function(nodeOrSelecter){
  
  let nodes = document.querySelectorAll(nodeOrSelecter)
  
  nodes.addclass=function(xxx){
    for(let i = 0;i<nodes.length;i++){
       nodes[i].classList.add(xxx)
    }
  }
  nodes.text=function(text){
    for(let i = 0;i<nodes.length;i++){
       nodes[i].textContent=text
    }
  }
  nodes.html=function(html){
    for(let i = 0;i<nodes.length;i++){
       nodes[i].innerHTML=html
    }
  }
  nodes.css=function(yyy,zzz){
    for(let i = 0;i<nodes.length;i++){
       nodes[i].style[yyy]=zzz
    }
  }
  nodes.getsiblings=function(){
    if(nodes.length===1){
      var allChildren = nodes[0].parentNode.children

  var array = {
    length: 0
  }
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== nodes[0]) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
    }else {
      return nodes
    }
  }
  return nodes
}
window.$=jquery
let $a = $('.qqq')
$a.html('ddddddd')
$a.getsiblings()

console.log($a.getsiblings())
