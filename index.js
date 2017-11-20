function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
var rank = document.getElementsByClassName('ranked-list')
for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = parseInt()+ n
}
  }

function deepestChild() {
  var current = document.querySelectorAll(`div#grand-node`)
  var next = []
  while (current) {
    if (document.querySelector(current)) { {
      for (let i =0; i < currentl.length; i++) {
        next.push(current[i])
      }
    }
current = next.shift()
  }
  return null

}
}