import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Latest from "../components/latest"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
    <SEO title="Home" />
    <div className="index">
      <div className="index-main">
        <Latest />
        {/* <div style={{ maxWidth: `300px`, margin: `10.45rem` }}>
          <Image />
        </div> */}
      </div>
      <Footer />
    </div>  
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query indexQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 720)
        frontmatter {
          title 
          date 
          tags
          pagetype
        }
        fields {
          slug
        }
      }
    }
  }
}
` 
