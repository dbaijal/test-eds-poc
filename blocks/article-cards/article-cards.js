export default function decorate(block) {
  const [heading, ...cards] = [...block.children];

  if (heading) {
    heading.classList.add('article-cards-heading');
  }

  const container = document.createElement('div');
  container.className = 'article-card-container'; // changed

  cards.forEach((cardRow) => {
    const card = document.createElement('div');
    card.className = 'article-card';

    const [imageWrapper, titleWrapper] = cardRow.children;

    const cardImage = document.createElement('div');
    cardImage.className = 'mini-card-image'; // changed
    cardImage.append(imageWrapper.querySelector('picture'));

    const cardText = document.createElement('div');
    cardText.className = 'mini-card-text'; // changed
    cardText.append(titleWrapper.querySelector('p'));

    card.append(cardText, cardImage);
    container.append(card);
  });

  block.textContent = ''; // Clear existing
  block.classList.add('article-cards');
  block.append(heading, container);
}
