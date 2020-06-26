import React from "react"
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    )
}

export default Footer