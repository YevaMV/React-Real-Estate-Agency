import { Fragment } from 'react';
import background from '../assets/background.jpg';
import HomePageMain from '../components/HomePageMain';
import classes from './Home.module.css';

function HomePage() {
  return (
    <Fragment>
      <div className={classes['main-image']}>
        <img src={background} alt="A table full of delicious food!" />
      </div>
      <HomePageMain />
    </Fragment>
  );
}
export default HomePage;
