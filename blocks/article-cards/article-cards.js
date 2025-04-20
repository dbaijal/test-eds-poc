import { div } from '../../scripts/dom-helpers.js';

export default function decorate(block) {
  const [heading, ...cards] = [...block.children];
  if (heading) {
    heading.classList.add('article-cards-heading');
  }
  const articleCardsContainer = div({ class: 'article-card-container' });
  cards.forEach(async (row) => {
    console.log("row is "+ row);
    row.className = 'article-card';
    const [imageDiv,titleDiv] = row.children;
    imageDiv.className = 'mini-card-image';
    titleDiv.className = 'mini-card-text';
    articleCardsContainer.append(row);
  });
  block.append(articleCardsContainer);
}
