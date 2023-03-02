import classes from './EstateItem.module.css';

function EstateItem(props) {
  return (
    <>
      <a href="#">
        <li className={classes['estate-item__content']}>
          <div className={classes['estate-item_image']}>
            <img src={props.image} alt={props.type} />
          </div>
          <div className={classes['estate-item__description']}>
            <p className={classes['estate-item__description__text']}>
              {props.type}
            </p>
            <p className={classes['estate-item__description__text']}>
              {props.place}
            </p>
          </div>

          <div className={classes['estate-item_about']}>
            <span className={classes['estate-item__about__text']}>
              Սենյակներ {props.bed}
            </span>
            <span className={classes['estate-item__about__text']}>
              Մակերես {props.sqft}քմ
            </span>
            <span className={classes.price}>{props.price}$</span>
          </div>
        </li>
      </a>
    </>
  );
}

export default EstateItem;
