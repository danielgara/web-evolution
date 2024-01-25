const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query {
        allMysqlPosts {
          edges {
            node {
              id
              title
              description
              slug
              created_at
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const postTemplate = path.resolve(`src/templates/post.js`)
  result.data.allMysqlPosts.edges.forEach(({ node }) => {
    const slug = node.slug
    const path = `/posts/${slug}/`
    createPage({
      path,
      component: postTemplate,
      context: {
        post: node,
      },
    })
  })
}