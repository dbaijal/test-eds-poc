export default async function decorate(block) {
    const aempublishurl = 'https://publish-p99952-e1559416.adobeaemcloud.com';
    const persistedquery = '/graphql/execute.json/aem-eds-poc/articleInformation';
    const contentPath = '/content/dam/aem-eds-poc/content-fragments/article-1';
    const url = `${aempublishurl}${persistedquery};path=${contentPath}`;
    const options = { credentials: 'include'};
    const cfReq = await fetch(url, options)
  .then((response) => response.json())
  .then((contentfragment) => {
    // Directly extract the item object from the response
    const item = contentfragment?.data?.articleByPath?.item;
    return item || null;
  });
  block.innerHTML = ``;
  block.innerHTML = `${
    cfReq?.articleTitle
  }`;
}