import React from "react"
import Twitter from "../images/twitter.svg"
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
          <hr/>
          <div className="footer-content">
            <a href="#"><img className="footer-content-twitter" src={Twitter} /></a>
            © {new Date().getFullYear()}, The Condemnation Game
          </div>
          
        </div>
    )
}

export default Footer