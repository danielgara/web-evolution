import * as React from "react";
import Layout from "../components/layout";
import city2 from "../images/city2.jpg";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog JAMstack</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto text-center">
          <p>Navigate to the <a href="/posts">posts section</a> to check the latest posts.</p>
          <img className="rounded img-fluid" src={city2} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
