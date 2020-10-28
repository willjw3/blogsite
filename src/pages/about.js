import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Latest from "../components/latest"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/about.scss"


const About = ({data}) => {
  
  const siteTitle = data.site.siteMetadata.title
    const professionalTech = []
    const infoRole = []
    const infoProgress = []
    data.allMarkdownRemark.edges.forEach(item => {
        if (item.node.frontmatter.pagetype === 'tech') {
            professionalTech.push(item)
        }
        if (item.node.frontmatter.pagetype === 'info' && item.node.frontmatter.title === 'Role') {
            infoRole.push(item)
        }
        if (item.node.frontmatter.pagetype === 'info' && item.node.frontmatter.title === 'Work In Progress') {
            infoProgress.push(item)
        }
    })
  
  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        <div className="about-main">
          <Latest />
          <div className="about-main-body">
            <div className="about-main-body-post">
                <div className="about-main-body-post-tech">
                    <h2 className="about-main-body-post-tech-title">Tech I Work With</h2>
                    <div className="about-main-body-post-tech-icons">
                        {
                            professionalTech.length && 
                            professionalTech.map((tech, i) => {
                                return (
                                    <div key={i} className="about-main-body-post-tech-icons-icon">
                                        <img src={tech.node.frontmatter.image.publicURL} alt={tech.node.frontmatter.title}/>
                                        <small>{tech.node.frontmatter.title}</small>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                    <div className="about-main-body-post-role">
                        <div dangerouslySetInnerHTML={{__html: infoRole[0].node.html}} />
                        <div dangerouslySetInnerHTML={{__html: infoProgress[0].node.html}} />
                    </div>
                </div>
            </div>
            <div className="about-main-body-sidebar">
                <div className="about-main-body-sidebar-image">
                    <Img fluid={data.profilePic.childImageSharp.fluid} />
                </div>
                <div className="about-main-facts-list">
                    <h4>{siteTitle}</h4>
                    <p className="about-main-facts-fact"><strong>Origin:</strong> California, USA</p>
                    <p className="about-main-facts-fact"><strong>Current Location:</strong> Tokyo, Japan</p>
                    <p className="about-main-facts-fact"><strong>Occupation:</strong> Web Developer</p>
                    <p className="about-main-facts-fact"><strong>Education:</strong> Bachelor of Science - Physics</p>
                </div>
            </div> 
          </div>
        </div>
        <Footer content="light" siteTitle={siteTitle} />
    </div>  
  </Layout>
  )
}

export default About

export const pageQuery = graphql`
query aboutQuery {
  site {
    siteMetadata {
      title
    }
  }
    profilePic: file(relativePath: {eq: "bt.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC}) {
        totalCount
        edges {
            node {
            html 
            frontmatter {
                title 
                image {
                publicURL
                }
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
