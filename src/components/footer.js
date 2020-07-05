import React from "react"
import Twitter from "../images/twitter.svg"
import "../styles/footer.scss";

const Footer = ({content}) => {
    return (
        <div className="footer">
          <hr/>
          <div className={`footer-${content}`}>
            <a href="#"><img className={`footer-${content}-twitter`} src={Twitter} /></a>
            <p>© {new Date().getFullYear()}, 2LD21C</p>
          </div> 
        </div>
    )
}

export default Footer