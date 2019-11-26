// useState是最新的函数化react的新功能
import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import logo from "../images/logo.svg";

const Navbar = () => {
  // 这里useSat是为了设置当导航栏变成burger key后的状态，如果为true，就是出现burger key, 否则，就没有。
  // console.log(useState(false));
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };

  // console.log(isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />

          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                // This rel=noopener noreferrer is for preventing malicious html webpage to hack your website
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
