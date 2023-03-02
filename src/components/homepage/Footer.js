import { Fragment } from 'react';
import logo from '../../assets/logo.png';
import classes from './Footer.module.css';

function Footer() {
  return (
    <Fragment>
      <section className={classes.footer}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src={logo} alt="footer-logo" />
          </div>
          <div className={classes.contact}>
            <i class="fa-solid fa-phone"></i>
            <a href="tel:+37493 00 00 00">+374 93 272-709</a>
          </div>
          <div className={classes.contact}>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:strongresidence@gmail.com">
              strongresidence@gmail.com
            </a>
          </div>
        </div>
        <div className={classes.rigth}></div>
      </section>
    </Fragment>
  );
}
export default Footer;
