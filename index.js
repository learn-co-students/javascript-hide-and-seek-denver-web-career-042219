function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let ranks = document
    .querySelectorAll('ul.ranked-list li')

    for (let i = 0; i < ranks.length; i++) {
      let rank = +ranks[i].innerHTML + n
      ranks[i].innerHTML = rank.toString()
    }
}

function deepestChild(){
  const grandNodes = document.querySelectorAll('#grand-node :first-child')
  const last = grandNodes.length-1
  return grandNodes[last]
}
