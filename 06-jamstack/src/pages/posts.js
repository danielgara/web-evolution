import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import { Helmet } from "react-helmet";

function PostsPage({
  data: {
    allMysqlPosts: { edges },
  },
}) {

  const Posts = edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {Posts}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
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


export default PostsPage