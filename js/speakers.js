const speakCont = document.getElementById('authors');

class speaker {
  constructor(name, imgUrl, title, resume) {
    this.name = name;
    this.img = imgUrl;
    this.title = title;
    this.resume = resume;
  }
}

const author1 = new speaker('Eben Schumacher', 'img/cardPicDummy.jpg', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');
const author2 = new speaker('Eben Schumacher', 'img/cardPicDummy.jpg', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');
const author3 = new speaker('Eben Schumacher', 'img/cardPicDummy.jpg', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');
const author4 = new speaker('Eben Schumacher', 'img/cardPicDummy.jpg', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');
const author5 = new speaker('Eben Schumacher', 'img/cardPicDummy.jpg', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');
const author6 = new speaker('Eben Schumacher', 'img/cardPicDummy.jpg', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');

const authorsList = [author1, author2, author3, author4, author5, author6];

function addSpeaker(name) {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardPic = document.createElement('div');
  cardPic.classList.add('cardPicture');
  const pict = document.createElement('img');
  pict.src = name.img;
  const bio = document.createElement('div');
  card.classList.add('cardBio');
  const bioName = document.createElement('h3');
  bioName.innerHTML = name.name;
  const bioTitle = document.createElement('small');
  bioTitle.innerHTML = name.title;
  const bioRes = document.createElement('p');
  bioRes.innerHTML = name.resume;

  bio.appendChild(bioName)
  bio.appendChild(bioTitle)
  bio.appendChild(bioRes)
  cardPic.appendChild(pict)
  card.appendChild(cardPic)
  card.appendChild(bio)
  speakCont.appendChild(card)
}

authorsList.forEach((author) => {
 addSpeaker(author)
});
