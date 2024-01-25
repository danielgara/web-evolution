import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

function AboutPage(props) {
  return (
    <Layout>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
        <p><span><b>Application developed by:</b></span> Daniel Correa <a href="https://twitter.com/danielgarax" target="_blank">(@danielgarax)</a></p>
        <p>Medellín, Colombia<br />
        2021
        </p>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage