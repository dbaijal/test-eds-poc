export default async function decorate(block) {
    const aempublishurl = 'https://publish-p99952-e1559416.adobeaemcloud.com';
    const persistedquery = '/graphql/execute.json/aem-eds-poc/articleInformation';
    const contentPath = '/content/dam/aem-eds-poc/content-fragments/article-1';
   // const contentPath = block.querySelector(':scope div:nth-child(2) > div a')?.textContent?.trim();
    const url = `${aempublishurl}${persistedquery};path=${contentPath}`;
    const options = { credentials: 'include'};
    const cfReq = await fetch(url, options)
  .then((response) => response.json())
  .then((contentfragment) => {
    // Directly extract the item object from the response
    const item = contentfragment?.data?.articleinfoByPath?.item;
    return item || null;
  });
  block.innerHTML = ``;
  block.innerHTML = `${
    cfReq?.articleItem
  }`;
} 
/*
  export default async function decorate(block) {
    const aempublishurl = 'https://author-p118103-e1621695.adobeaemcloud.com';
    const persistedquery = '/graphql/execute.json/aem-eds-poc/articleInformation';
    
    // Get the content fragment path from the block (2nd child div)
    const contentPath = block.querySelector(':scope div:nth-child(2) > div a')?.textContent?.trim();
  
    const url = `${aempublishurl}${persistedquery};path=${contentPath}`;
    const options = { credentials: 'include' };
  
    const cfReq = await fetch(url, options)
      .then((response) => response.json())
      .then((contentfragment) => {
        return contentfragment?.data?.articleinfoByPath?.item || null;
      });
  
    // Clear existing block content
    block.innerHTML = '';
  
    // Only render if data is available
    if (cfReq && contentPath) {
      const itemId = `urn:aemconnection:${contentPath}/jcr:content/data/master`;
  
      block.innerHTML = `
        <div data-aue-resource="${itemId}" data-aue-type="reference" data-aue-filter="cf">
          <p data-aue-prop="articleItem" data-aue-label="Article Item" data-aue-type="text">${cfReq?.articleItem || ''}</p>
          <p data-aue-prop="articleAuthor" data-aue-label="Article Author" data-aue-type="text">${cfReq?.articleAuthor || ''}</p>
        </div>
      `;
    } else {
      block.innerHTML = `<p>Failed to load content fragment.</p>`;
    }
  }
  */