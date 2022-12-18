import React from "react";
import "./style.css";
import { FaGitSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p className="author">
          <a
            href="https://github.com/AbduallahBarmu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGitSquare className="git-icon" />
          </a>
          Abduallah Barmu
        </p>
      </footer>
    </div>
  );
};

export default Footer;
