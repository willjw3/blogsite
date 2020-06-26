import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <div className="index-main">
        <div style={{ maxWidth: `300px`, margin: `10.45rem` }}>
          <Image />
        </div>
      </div>
      <Footer />
    </div>  
  </Layout>
)

export default IndexPage
