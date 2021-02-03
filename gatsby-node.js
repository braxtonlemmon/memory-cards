/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require('node-fetch');

exports.sourceNodes = async({
  actions: { createNode },
  createContentDigest,
}) => {
  // const result = await fetch('https://picsum.photos/v2/list?page=4')
  const result = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=sTTtJCI2EOET4PxZVBTlAsets7RX5T7b&limit=20')
  const resultData = await result.json();
  resultData.data.forEach(image => {
    createNode({
      imageUrl: image.url,
      id: image.id,
      parent: null,
      children: [],
      internal: {
        type: `MyPicsumNodes`,
        contentDigest: createContentDigest(image)
      }
    })
  })
}