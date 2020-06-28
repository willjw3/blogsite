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
  const posts = data.allMarkdownRemark.edges 
  const philosophyPosts = []
  const psychologyPosts = []
  const politicsPosts = []
  const sciencePosts = []

  for (let i=0; i<posts.length; i++) {
    if (posts[i].node.frontmatter.tags.includes("philosophy") && philosophyPosts.length < 2) {
      philosophyPosts.push(posts[i])
    }
    if (posts[i].node.frontmatter.tags.includes("psychology") && psychologyPosts.length < 2) {
      psychologyPosts.push(posts[i])
    }
    if (posts[i].node.frontmatter.tags.includes("politics") && politicsPosts.length < 1) {
      politicsPosts.push(posts[i])
    }
    if (posts[i].node.frontmatter.tags.includes("science") && sciencePosts.length < 1) {
      sciencePosts.push(posts[i])
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
            <h3>Philosophy</h3>
            <PostList posts={philosophyPosts} />
            <hr/>
            <br />
            <h3>Psychology</h3>
            <PostList posts={psychologyPosts} />
            <hr/>
            <br />
            <h3>Politics</h3>
            <PostList posts={politicsPosts} />
            <hr/>
            <br />
            <h3>Science</h3>
            <PostList posts={sciencePosts} />
            <hr/>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query indexQuery {
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
        }
        fields {
          slug
        }
      }
    }
  }
}
` 
