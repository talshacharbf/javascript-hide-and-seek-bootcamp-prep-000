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
  let current = document.getElementById('grand-node')
    let next = current.children[0]

    while (next) {
      current = next
      next = current.children[0]
    }
    return current
  }
