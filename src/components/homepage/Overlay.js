import { Fragment } from 'react';
import classes from './Overlay.module.css';
import overlay from '../../assets/overlay-1.jpg';

function Overlay() {
  return (
    <Fragment>
      <div className={classes['overlay-block']}>
        <img src={overlay} alt="overlay" />
      </div>
    </Fragment>
  );
}

export default Overlay;
