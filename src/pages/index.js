import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Latest from "../components/latest"
import PostBlock from "../components/postblock"
import PostList from "../components/postlist"
import SEO from "../components/seo"
import "../styles/index.scss"


const IndexPage = ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges 
  const dataSciencePosts = []
  const webDevelopmentPosts = []
  const mathematicsPosts = []
  const technologyPosts = []

  for (let i=0; i<posts.length; i++) {
    if (posts[i].node.frontmatter.tags.includes("data-science") && dataSciencePosts.length < 2) {
      dataSciencePosts.push(posts[i])
    }
    if (posts[i].node.frontmatter.tags.includes("web-development") && webDevelopmentPosts.length < 2) {
      webDevelopmentPosts.push(posts[i])
    }
    if (posts[i].node.frontmatter.tags.includes("mathematics") && mathematicsPosts.length < 1) {
      mathematicsPosts.push(posts[i])
    }
    if (posts[i].node.frontmatter.tags.includes("technology") && technologyPosts.length < 1) {
      technologyPosts.push(posts[i])
    }
  }
  
  return (
    <Layout>
    <SEO title="Home" />
    <div className="index">
      <div className="index-main">
        <Latest />
        <div className="index-main-body">
          <div className="index-main-body-post">
            <PostBlock post={posts[0]} />
          </div>
          <div className="index-main-body-postlist">
            <h3>Web Development</h3>
            <PostList posts={webDevelopmentPosts} />
            <hr/>
            <h3>Data Science</h3>
            <PostList posts={dataSciencePosts} />
            <hr/>
            <h3>Mathematics & Physics</h3>
            <PostList posts={mathematicsPosts} />
            <hr/>
            <h3>Technology</h3>
            <PostList posts={technologyPosts} />
            <hr/>
            <br />
            <br />
            <Link to="/archives"><p>Browse Archives</p></Link>
          </div> 
        </div>
      </div>
      <Footer content="light" siteTitle={siteTitle} />
    </div>  
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query indexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 20 sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        snippet
        html 
        excerpt(pruneLength: 720)
        frontmatter {
          title 
          date(formatString: "MMMM DD, YYYY") 
          tags
          pagetype
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
` 
