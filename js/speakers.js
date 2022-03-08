const speakCont = document.getElementById('authors');

const speakAuthor = {
  name: 'Eben Schumacher',
  img: 'img/cardPicDummy.jpg',
  title: 'Artist & Musician Designer',
  resume: 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.'
};

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

addSpeaker(speakAuthor)
