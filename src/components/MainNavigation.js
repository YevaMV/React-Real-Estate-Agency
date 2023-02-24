import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>StrongResidence</h1>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Գլխավոր
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buy"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Գնել
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rent"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Վարձակալել
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Մեր մասին
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Կոնտակտ
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
export default MainNavigation;
