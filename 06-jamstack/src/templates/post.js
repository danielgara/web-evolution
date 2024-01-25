import React  from 'react';
import Layout from "../components/layout";
import city from "../images/city.jpg";
import { Helmet } from "react-helmet";

export default function Post({ pageContext }) {
  const { post } = pageContext
  return (
    <Layout>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            <h2 className="post-title">
              {post.title}
            </h2>
            <p className="post-meta">Posted by <span><b>Admin</b></span> on {post.created_at}</p>
            <div className="text-center">
              <img className="rounded img-fluid" src={city} />
              <br />
              <p class="post-subtitle font-300">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
