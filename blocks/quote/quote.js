import { fetchPlaceholders } from '../../scripts/aem.js';

const globalProperties = await fetchPlaceholders();
console.log("placeholder Object is " + globalProperties.blockquote);
export default function decorate(block) {
    const [quoteWrapper] = block.children;
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim();
    // Append additional content from globalProperties.blockquote
    const placeholderContent = document.createTextNode("~~" + globalProperties.blockquote);
    blockquote.appendChild(placeholderContent);
    quoteWrapper.replaceChildren(blockquote);
  }
  