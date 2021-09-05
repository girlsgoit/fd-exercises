let data = [
  {
    title: "Soccer",
    description: "Soccer is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field called a pitch with a goal at each end.",
    imageUrl: "https://picsum.photos/400",
    imageAlt: "Soccer",
    isLiked: false,
  },
  {
    title: "Basketball",
    description: "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop.",
    imageUrl: "https://picsum.photos/400",
    imageAlt: "Basketball",
    isLiked: false,
  },
  {
    title: "Tennis",
    description: "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court.",
    imageUrl: "https://picsum.photos/400",
    imageAlt: "Tennis",
    isLiked: false,
  },
];

function createCardTitle(title) {
  const header = document.createElement("header");
  const h2 = document.createElement("h2");

  h2.innerText = title;

  header.append(h2);

  return header;
}

function createCardImage(imageUrl, alt) {
  const img = document.createElement("img");

  img.setAttribute("src", imageUrl);
  img.setAttribute("alt", alt);

  return img;
}

function createCardContent(content) {
  const div = document.createElement("div");
  div.classList.add("content");

  const p = document.createElement("p");
  p.innerText = content;

  div.append(p);

  return div;
}

function createCardFooter(isLiked) {
  const footer = document.createElement("footer");
  const input = document.createElement("input");

  input.setAttribute("type", "submit");
  input.setAttribute("value", "");

  if (isLiked) {
    input.classList.add("liked");
  } else {
    input.classList.add("default");
  }

  footer.append(input);

  return footer;
}

function createCard(card) {
  const article = document.createElement("article");

  article.classList.add("card");

  const cardTitle = createCardTitle(card.title);
  const cardImage = createCardImage(card.imageUrl, card.ImageAltText);
  const cardContent = createCardContent(card.description);
  const cardFooter = createCardFooter(card.isLiked);

  article.append(cardTitle);
  article.append(cardImage);
  article.append(cardContent);
  article.append(cardFooter);

  return article;
}

function createCardsContainer() {
  const div = document.createElement("div");

  div.classList.add("cards");

  return div;
}

function handleLikeClick(event) {
  event.target.classList.toggle("liked");
}

function loadCards() {
  const cardsContainer = createCardsContainer();

  data.forEach(cardData => {
      const card = createCard(cardData);
      cardsContainer.append(card);
  });

  document.body.prepend(cardsContainer);

  const likeElements = document.querySelectorAll(".card footer input");

  for (let item of likeElements) {
      item.addEventListener('click', handleLikeClick);
  }
}

document.addEventListener("DOMContentLoaded", loadCards);
