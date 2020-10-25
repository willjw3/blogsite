import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
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
            <div className="about">
                <div className="about-main">
                    {/* <h2 className="about-main-title">Who I Am</h2> */}
                    <div className="about-main-facts">
                        <p className="about-main-facts-fact"><strong>Origin:</strong> California, USA</p>
                        <p className="about-main-facts-fact"><strong>Current Location:</strong> Tokyo, Japan</p>
                        <p className="about-main-facts-fact"><strong>Occupation:</strong> Web Developer</p>
                        <p className="about-main-facts-fact"><strong>Education:</strong> Bachelor of Science - Physics</p>
                    </div>
                    <div className="about-main-tech">
                        <h2 className="about-main-tech-title">Tech I Use Professionally</h2>
                        <div className="about-main-tech-icons">
                            {
                                professionalTech.length && 
                                professionalTech.map((tech, i) => {
                                    return (
                                        <div key={i} className="about-main-tech-icons-icon">
                                            <img src={tech.node.frontmatter.image.publicURL} alt={tech.node.frontmatter.title}/>
                                            <small>{tech.node.frontmatter.title}</small>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                        <div className="about-main-role">
                           <div dangerouslySetInnerHTML={{__html: infoRole[0].node.html}} />
                           <div dangerouslySetInnerHTML={{__html: infoProgress[0].node.html}} />
                        </div>
                    </div>
                    
                </div>
                <Footer content="light" siteTitle={siteTitle}/>
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
