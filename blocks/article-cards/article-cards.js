export default function decorate(block) {
  const [heading, ...cards] = [...block.children];

  if (heading) {
    heading.classList.add('article-cards-heading');
  }

  const container = document.createElement('div');
  container.className = 'article-cards-container';

  cards.forEach((cardRow) => {
    const card = document.createElement('div');
    card.className = 'article-card';

    const [imageWrapper, titleWrapper] = cardRow.children;

    const cardImage = document.createElement('div');
    cardImage.className = 'article-card-image';
    cardImage.append(imageWrapper.querySelector('picture'));

    const cardTitle = document.createElement('div');
    cardTitle.className = 'article-card-title';
    cardTitle.append(titleWrapper.querySelector('p'));

    card.append(cardTitle, cardImage);
    container.append(card);
  });

  block.textContent = ''; // Clear existing
  block.classList.add('article-cards');
  block.append(heading, container);
}
