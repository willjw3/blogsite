import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/latest.scss"

const Latest = () => {
    const data = useStaticQuery(graphql`
        query LatestQuery {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
                edges {
                    node {
                        html 
                        frontmatter {
                            title 
                            tags
                            date
                            pagetype
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const taggedMarkdown = []
    data.allMarkdownRemark.edges.forEach(markdownFile => {
      if (markdownFile.node.frontmatter.pagetype === 'article'){
        taggedMarkdown.push(markdownFile)
      }
    })

    return (
        <div className="latest">
            <div className="latest-title">
                <h3>The Latest</h3>
            </div>
            <div className="latest-posts">
                <Link id="link1" to={taggedMarkdown[0].node.fields.slug}>
                    <small>{taggedMarkdown[0].node.frontmatter.title} <span>({taggedMarkdown[0].node.frontmatter.tags[0]})</span></small>
                </Link>
                <Link id="link2" to={taggedMarkdown[1].node.fields.slug}>
                    <small>{taggedMarkdown[1].node.frontmatter.title} <span>({taggedMarkdown[1].node.frontmatter.tags[0]})</span></small>
                </Link>
                <Link id="link3" to={taggedMarkdown[2].node.fields.slug}>
                    <small>{taggedMarkdown[2].node.frontmatter.title} <span>({taggedMarkdown[2].node.frontmatter.tags[0]})</span></small>
                </Link>
            </div>
        </div>
    )
}

export default Latest