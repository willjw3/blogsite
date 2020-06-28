import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/article.scss";

const Article = ({data}) => {
    const post = data.markdownRemark;
    console.log(post)
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div className={`article ${darkMode ? `dark-mode` : ``}`}>
                <div className="article-main">
                    <div className="article-main-toggle">
                        <span style={{ color: darkMode ? "grey" : "orange"}}>☀</span>
                        <span className="article-main-toggle-switch">
                            <input
                                checked={darkMode}
                                onChange={() => setDarkMode(prevMode => !prevMode)}
                                id="checkbox"
                                className="checkbox" 
                                type="checkbox"
                            />
                            <label htmlFor="checkbox" />
                        </span>
                        <span style={{ color: darkMode ? "orange" : "gray"}}>☽</span>
                    </div>
                    <h1>{post.frontmatter.title}</h1>
                    <small>{post.frontmatter.date}</small>
                    <hr/>
                    <div className="article-main-body" dangerouslySetInnerHTML={{__html: post.html}} />
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default Article;

export const pageQuery = graphql`
query articleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html 
        frontmatter {
            title 
            date(formatString: "MMMM DD, YYYY") 
            tags 
        }
    }
}
`