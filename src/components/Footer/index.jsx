import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>Interactive Solar System</h5>
            <p className={styles.description}>
              A web app created in one week for SFU's Software Systems Student Society Hackedemia competition! Contributors: Jason Spence, Benjamin Djukastein, Nhi Mai-Do and Phu-Khang Bui
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  What <strong>is</strong> Space?
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  What are AU (Astronomical Units)?
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  3rd placeholder question here lol
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;