var gridContainer = document.querySelector('.container');
const grid = new Masonry( gridContainer, {
  
  itemSelector: '.card',
  // columnWidth: 300
  
});

var folders = 
["2019.10.28.01.19.20",
"2019.10.28.01.19.30",
"2019.10.28.01.19.32",
"2019.10.30.01.01.01",
"2019.10.30.01.01.02",
"2019.10.31.01.09.27",
"2019.10.31.01.09.30",
"2019.11.15.08.51.01",
"2019.11.15.08.51.02",
"2019.11.15.08.51.03",

]
populate(folders)

function populate(folders){
  var cnt = 0
  for  ( folder in folders) {
    var imagePath = 'assets/cards/' + folders[cnt++] +  '/hero.jpg'
    var titleStr = 'card :' + cnt
    addCardtoGrid(imagePath,titleStr,'lg')
  }
  
  grid.layout()
}

function addCardtoGrid(heroImage,cardTitle,scale) { 
  
  let cardNode = document.createElement('div')
  
  cardNode.className = 'card'
  
  if (scale === 'sm') {
    cardNode.innerHTML = getCard(heroImage,cardTitle)
  } else{
    cardNode.innerHTML = getSmallCard(heroImage,cardTitle)
  }
  gridContainer.appendChild(cardNode)
  grid.prepended ( cardNode )
}

function getCard(imagePath,cardTitle){
  let cardHTML = '<img src=' + imagePath + ' class="card-img-top" alt="...">'
  cardHTML += '<div class="card-body">'
  cardHTML += '<h5 class="card-title">' + cardTitle + '</h5>'
  cardHTML += '<p class="card-text">Some quick example text to title andrds content.</p>'
  cardHTML += '<a href="#" class="buttn">more</a>'
  cardHTML += '</div>'
  return cardHTML;
}

function getSmallCard(imagePath,cardTitle){
  let cardHTML = '<img src=' + imagePath + ' class="card-img-top" alt="...">'
  cardHTML += '<div class="card-body">'
  cardHTML += '<h5 class="card-title">' + cardTitle + '</h5>'
  cardHTML += '<a href="#" class="buttn">more</a>'
  cardHTML += '</div>'
  return cardHTML;
}
