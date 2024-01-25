import React from "react"
import PropTypes from "prop-types"
import homeBg from "./images/home-bg.jpg"

export default function HTML(props) {
  const styleGrey = {backgroundColor : 'rgba(0, 0, 0, 0.05)'};
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="/">Home</a>
            <div id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/posts">Posts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead" style={{ backgroundImage: `url(${homeBg})` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1 style={{ textShadow: "grey 2px 3px" }}>Blog JAMstack</h1>
                  <span className="subheading" style={{ textShadow: "grey 1px 1px" }}>A blog with JAMstack</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <footer>
          <div className="text-center p-4" style={styleGrey}>
            © 2021 DanielGara Copyright - 
            <a style={{ fontWeight: 700, textDecoration: "none"}} href="https://github.com/danielgara/blogjamstack" target="_blank"> GitHub</a>
          </div>
        </footer>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
