const speakCont = document.getElementById('authors');

class Speaker {
  constructor(name, imgUrl, title, resume) {
    this.name = name;
    this.img = imgUrl;
    this.title = title;
    this.resume = resume;
  }
}

const author1 = new Speaker('Eben Schumacher', 'img/author1.png', 'Artist & Musician Designer', 'After spending most of my childhood and adolescence drawing and painting, I eventually acquired a degree in Art and Philosophy, and shortly after began my career as a freelance artist.');
const author2 = new Speaker('Arn Andersson', 'img/author2.png', 'Composer, Producer & Digital Nomad', '“All anyone was teaching was text book theory… I had to piece together the puzzle, and carve my own path as a modern creative”');
const author3 = new Speaker('Emma Nixon', 'img/author3.png', 'Jack of all trades Implementor', 'Broke the chains of employment and became a freelancer in 2015, specializing in online training, automation and marketing, handling a variety of accounts from beauty products, to digital therapeutics. Created a few amazing chat-bots, traveled the many islands of the Philippines, and started my own travel and tours company promoting local tourism here');
const author4 = new Speaker('Chris Gustin', 'img/author4.png', 'Composer & Content Manager', 'I was born in Chicago, IL and spent my formative years playing guitar & drums in indie rock bands. I later made my way across the country to study Guitar Theory and Audio Engineering at Musicians Institute in Hollywood, CA.');
const author5 = new Speaker('Amber Skipper', 'img/author5.png', 'Digital Artist & Graphic Designer', 'Over the following years I studied new softwares such as After Effects and Photoshop where I found a love for digital art, and went on to study Visual Effects at university.');
const author6 = new Speaker('Alan Schwegler', 'img/author6.png', 'Moderator & Student Support', 'I acquired my degree in Graphic Design in 2010. Received my Master of Business Administration in 2016. Currently pursuing Executive training in Customer Experience at UW-Parkside. I don’t think I ever will stop going to school...');

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

  bio.appendChild(bioName);
  bio.appendChild(bioTitle);
  bio.appendChild(bioRes);
  cardPic.appendChild(pict);
  card.appendChild(cardPic);
  card.appendChild(bio);
  speakCont.appendChild(card);
}

authorsList.forEach((author) => {
  addSpeaker(author);
});

const authCre = document.querySelectorAll('.card');
const showMore = document.createElement('button');
showMore.classList.add('showBtn');
showMore.innerHTML = 'MORE';

showMore.addEventListener('click', () => {
  if (authCre[2].style.display === 'none') {
    for (let i = 2; i < authCre.length; i++) {
      authCre[i].style.display = '';
    }
    showMore.innerHTML = 'LESS';
  } else if (authCre[2].style.display === '') {
    for (let i = 2; i < authCre.length; i++) {
      authCre[i].style.display = 'none';
    }
    showMore.innerHTML = 'MORE';
  }
});

function speakShow() {
  if (screen.width <= 768 ) {
    for (let i = 2; i < authCre.length; i++) {
      authCre[i].style.display = 'none';
    }
    speakCont.appendChild(showMore);
  } else if (screen.width > 768 && authCre[2].style.display === 'none') {
    for (let i = 2; i < authCre.length; i++) {
      authCre[i].style.display = '';
    }
    speakCont.removeChild(showMore);
  } else if (screen.width > 768 && speakCont.contains(showMore)) {
    showMore.innerHTML = 'MORE';
    speakCont.removeChild(showMore);
  }
}

speakShow()

window.addEventListener('resize', () => {
  speakShow()
});
