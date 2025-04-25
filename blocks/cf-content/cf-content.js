export default async function decorate(block) {
    const aempublishurl = 'https://author-p118103-e1621695.adobeaemcloud.com';
    const persistedquery = '/graphql/execute.json/aem-eds-poc/articleInformation';
    //const contentPath = '/content/dam/aem-eds-poc/content-fragment/article1';
    const contentPath = block.querySelector(':scope div:nth-child(2) > div a')?.textContent?.trim();
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