import post1 from '../../assets/post-1.jpg';
import post2 from '../../assets/post-2.jpg';
import post3 from '../../assets/post-5.jpg';
import post4 from '../../assets/post-4.jpg';
import post5 from '../../assets/post-6.jpg';
import post7 from '../../assets/post-7.jpg';
import { Fragment } from 'react';
import HomePageTopSections from './HomePageTopSections';
import HomePageBottomSection from './HomePageBottomSection';
import Footer from './Footer';
import Overlay from './Overlay';
import classes from './HomePageMain.module.css';

function HomePageMain() {
  return (
    <Fragment>
      <div className={classes['top-block']}>
        <HomePageTopSections
          img={post1}
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />

        <HomePageTopSections
          specialStyle={true}
          img={post2}
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <HomePageTopSections
          img={post3}
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      </div>
      <div>
        <Overlay />
      </div>

      <div className={classes['bottom-block']}>
        <HomePageBottomSection
          link="/buy"
          title="Գնել անշարժ գույք"
          img={post4}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          button="Գնել անշարժ գույք"
        />
        <HomePageBottomSection
          link="/rent"
          title="Վարձակալել անշարժ գույք"
          img={post5}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          button="Վարձակալել անշարժ գույք"
        />
        <HomePageBottomSection
          link="/sell"
          title="Վաճառել անշարժ գույք"
          img={post7}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          button="Վարձակալել անշարժ գույք"
        />
      </div>
      <Footer />
    </Fragment>
  );
}
export default HomePageMain;
