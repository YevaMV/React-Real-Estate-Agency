import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>StrongResidence</h1>
        <nav>
          <ul className={classes.list}>
            <li>
              <Link to="/">Գլխավոր</Link>
            </li>
            <li>
              <Link to="/buy">Գնել</Link>
            </li>
            <li>
              <Link to="/rent">Վարձակալել</Link>
            </li>
            <li>
              <Link to="about">Մեր մասին</Link>
            </li>
            <li>
              <Link to="contact">Կոնտակտ</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
export default MainNavigation;
