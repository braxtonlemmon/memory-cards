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
  const result = await fetch('https://picsum.photos/v2/list?page=4')
  const resultData = await result.json();
  resultData.forEach(image => {
    createNode({
      imageUrl: image.download_url,
      id: image.id,
      parent: null,
      children: [],
      internal: {
        type: `picsum`,
        contentDigest: createContentDigest(image)
      }
    })
  })
}